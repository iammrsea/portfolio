import VuetifyLoaderPlugin from "vuetify-loader/lib/plugin";
import pkg from "./package";
const path = require("path");
import manifest from "./manifest.json";

export default {
  mode: "universal",

  serverMiddleware: [],

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
      }
      // {
      //   rel: "stylesheet",
      //   href: "https://use.fontawesome.com/releases/v5.7.2/css/all.css",
      //   integrity:
      //     "sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr",
      //   crossorigin: "anonymous"
      // }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: ["~/assets/style/app.styl"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@/plugins/vuetify", "@/plugins/disqus"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    // "@nuxtjs/axios",
    ["~/modules/generateManifest", { entryDirectory: "content" }],
    "~/modules/myhooks"
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    transpile: ["vuetify/lib"],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ["~assets/style/variables.styl"]
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      const assetsLoader = config.module.rules.find(rule =>
        rule.test.test(".png")
      );

      // Overwrite the test regex and add `pdf`
      assetsLoader.test = /\.(png|jpe?g|gif|svg|webp|pdf)$/i;
      // config.resolveLoader = {};
      // config.resolveLoader.modules["node_modules"];
      config.resolveLoader.modules.push(path.resolve(__dirname, "loaders"));

      config.module.rules.push({
        test: /\.md$/,
        use: [
          {
            loader: "frontmatter-markdown-loader",

            options: {
              vue: {
                root: "dynamicMarkdown"
              }
            }
          }
        ]
      });
      // console.log(config);
      return config;
    }
  },
  generate: {
    routes: []
      .concat(manifest.map(postMeta => `/blog/${postMeta.slug}`))
      .concat(
        ["technology", "education"].map(
          category => `/blog/categories/${category}`
        )
      )
  }
};
