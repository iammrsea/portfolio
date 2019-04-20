<template>
  <div class="background">
    <v-btn flat color="portfolio" v-ripple @click="previous" class="back">
      <v-icon left>arrow_back</v-icon>
      <span class="text-capitalize subheading">Back</span>
    </v-btn>
    <div class="curve-bar mb-5">
      <v-layout column justify-center>
        <v-flex xs12>
          <v-layout justify-center column>
            <v-flex xs12 class="avatar">
              <v-avatar size="200px">
                <img :src="require('@/assets/img/bottom.jpg')" alt="Andrew">
              </v-avatar>
            </v-flex>
            <v-flex xs12 class="avatar">
              <h4 class="mt-2 portfolio--text pl-3 pr-3 pt-3 pb-0">
                <span>Author:</span>
                {{post.attributes.author}}
              </h4>

              <p class="portfolio--text pa-3">Date: {{$filterDate(post.attributes.date)}}</p>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12>
          <h1 class="my-3 article-title display-1">{{post.attributes.title}}</h1>
        </v-flex>
        <v-flex xs12>
          <div v-html="post.html" class="head"></div>
        </v-flex>
      </v-layout>
      <v-container>
        <div class="comments mt-5">
          <vue-disqus :shortname="shortname" :identifier="post.attributes.slug" :url="url"></vue-disqus>
        </div>
      </v-container>
    </div>
  </div>
</template>
<script>
import manifest from "../../manifest.json";
import { filterDate } from "@/util/dateFilter";

import hljs from "highlight.js/lib/highlight";
import javascript from "highlight.js/lib/languages/javascript";
import bash from "highlight.js/lib/languages/bash";
import java from "highlight.js/lib/languages/java";

import "highlight.js/styles/atom-one-dark.css";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("bash", bash);
hljs.registerLanguage("java", java);

export default {
  middleware: ["retrieveQuery"],
  data() {
    return {
      shortname: "mrseaonline",
      url: "https://mrseaonline.com.ng/blog"
    };
  },
  async asyncData({ params }) {
    let postInfo = manifest.find(postData => postData.slug === params.postslug);
    let post = await import(`@/content/${postInfo.url}`);
    return { post };
  },
  methods: {
    previous() {
      if (!this.$myQuery) {
        this.$router.push(this.$myPath);
      } else if (this.$myQuery && this.$myPath) {
        this.$router.push({ path: "/blog", query: this.$myQuery });
      } else {
        this.$router.push("/blog");
      }
    }
  },
  computed: {
    initHighlightJs() {
      let targets = document.querySelectorAll("pre code");
      targets.forEach(target => {
        hljs.highlightBlock(target);
      });
    }
  },
  mounted() {
    this.initHighlightJs;
  },

  created() {
    this.$filterDate = filterDate;
  },
  head() {
    return {
      title: this.post.attributes.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.post.attributes.description
        },
        { hid: "author", name: "author", content: "Andrew Ekwugha" },
        {
          hid: "keywords",
          name: "keywords",
          content:
            this.post.attributes.keywords ||
            "nuxtjs, vuejs,static website, web developer,building nuxt modules,nuxt middleware"
        }
      ]
    };
  }
};
</script>
<style lang="scss" >
$backgroud-color: brown;
$colorBg: #040028;
$colorFg: #ffffff;
$color: #080818;

img {
  width: 100%;
  height: auto;
  width: auto\9; /* ie8 */
}
.curve-bar {
  position: relative;
  border-left: 20px solid rgb(55, 167, 204);
  border-top: 20px solid rgb(55, 167, 204);
  border-top-left-radius: 40px;
  height: 100%;
  padding: 10px;
  margin-left: 30px;
  color: $colorFg;
  text-justify: auto;
}

@media screen and(min-width: 865px) {
  .curve-bar {
    margin-left: 100px;
    margin-right: 100px;
    border-right: 20px solid rgb(55, 167, 204);
    border-top-right-radius: 40px;
  }
  .back {
    margin-left: 50px;
  }
}
@media screen and(min-width: 1130px) {
  .curve-bar {
    margin-left: 200px;
    margin-right: 200px;
    border-right: 20px solid rgb(55, 167, 204);
    border-top-right-radius: 40px;
  }
  .back {
    margin-left: 150px;
  }
}
@media screen and(max-width: 450px) {
  .curve-bar {
    margin-left: 10px;
    border-left: 10px solid rgb(55, 167, 204);
    border-top: 10px solid rgb(55, 167, 204);
  }
}

html {
  font-size: 16px;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  background: $colorBg;
}
body {
  margin: 0;
  font-size: 20px;
  line-height: 1.5em;
  padding: 0px;
}
.avatar {
  text-align: center;
}
.myPost {
  background: $backgroud-color;
}
.head {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 25px;
  line-height: 2em;
  text-align: justify;
}
pre code.language-javascript::after,
pre code.javascript::after {
  content: "js";
}
pre code.language-java::after,
pre code.java::after {
  content: "java";
}
pre code.language-javascript::after,
pre code.javascript::after,
pre code.language-java::after,
pre code.java::after {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background: rgb(55, 167, 204);
  color: #fff;
  padding: 0 0.5em 0.125em 0.5em;
  font-size: 1em;
  text-shadow: 1px 1px 0 #000;
}

code {
  padding: 20px;
  white-space: pre;
  font-size: 20px;
}
// pre {
//   overflow-x: scroll;
// }
.hljs-function {
  margin-top: 20px;
  display: inline-block;
  padding: 10px;
  padding-left: 0px;
}
.hljs-class {
  margin-top: 20px;
  display: inline-block;
  padding: 10px;
  padding-left: 0px;
}
pre code {
  position: relative;
  font-family: Menlo, Monaco, "Andale Mono", "lucida console", "Courier New",
    monospace;
  line-height: 1.45em;
  margin: 0;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.45) 0 1px 4px;
}
</style>
