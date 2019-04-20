const fs = require("fs");
const path = require("path");
const fm = require("front-matter");
const { promisify } = require("es6-promisify");
const promisifiedReaddir = promisify(fs.readdir);
const promisifiedReadFile = promisify(fs.readFile);
const promisifiedStat = promisify(fs.stat);
const writeFile = fs.writeFile;

export default function generate(moduleOptions = {}) {
  console.log("module running...");
  let listOfPosts = [];
  let options = Object.assign({}, moduleOptions);

  if (
    options.entryDirectory === null ||
    options.entryDirectory === undefined ||
    options.entryDirectory === ""
  ) {
    console.warn("Invalid Option: Please provide a directory name");
  } else {
    this.nuxt.hook("build:before", () => {
      readFiles(options.entryDirectory);
    });
    this.nuxt.hook("build:done", () => {
      writeFile("./manifest.json", JSON.stringify(listOfPosts), e => {
        if (e) {
          console.log(e);
        }
      });
      // console.log(listOfPosts);
    });
  }

  async function readFiles(entryDirectory) {
    try {
      let files = await promisifiedReaddir(entryDirectory);

      for (let i = 0; i < files.length; i++) {
        let newPath = path.resolve(entryDirectory, files[i]);

        let stats = await promisifiedStat(newPath);
        if (stats.isDirectory()) {
          readFiles(newPath);
        } else {
          let data = await promisifiedReadFile(newPath, "utf8");
          let attributes = fm(data).attributes;
          let pathInfo = retrievePath(newPath, options.entryDirectory);

          let jsonObj = {
            url: pathInfo.url,
            slug: `${attributes.title
              .split(" ")
              .join("-")
              .toLowerCase()}`,
            category: attributes.category.toLowerCase(),
            date: attributes.date
          };

          listOfPosts.push(jsonObj);
        }
      }
    } catch (e) {
      console.log(e.message);
      console.log("Ensure to provide a valid directory name");
    }
  }

  function retrievePath(url, entryDirectory) {
    let paths;
    paths = url.split("\\");
    return {
      url: paths.slice(paths.indexOf(entryDirectory) + 1).join("/")
      // group: paths[paths.length - 2]
    };
  }
}
