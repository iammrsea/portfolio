<template>
  <div class="background">
    <v-btn flat color="portfolio" v-ripple @click="previous">
      <v-icon left>arrow_back</v-icon>
      <span class="text-capitalize subheading">Back</span>
    </v-btn>
    <div class="curve-bar mb-5">
      <v-layout column justify-center>
        <v-flex xs12>
          <h4 class="mt-2 portfolio--text pl-3 pr-3 pt-3 pb-0">
            <span>Author:</span>
            {{post.attributes.author}}
          </h4>
          <p class="portfolio--text pa-3">Date: {{$filterDate(post.attributes.date)}}</p>
        </v-flex>
        <v-flex xs12>
          <h1 class="my-3 article-title display-1">{{post.attributes.title}}</h1>
        </v-flex>
        <v-flex xs12>
          <dynamic-post
            :renderFunc="post.default.vue.render"
            :staticRenderFuncs="post.default.vue.staticRenderFns"
          ></dynamic-post>
        </v-flex>
      </v-layout>
    </div>
    <v-container>
      <div class="comments mt-3">
        <vue-disqus :shortname="shortname" :identifier="post.attributes.slug" :url="url"></vue-disqus>
      </div>
    </v-container>
  </div>
</template>
<script>
import PostDetail from "@/components/blog/PostDetail";
import DynamicPost from "@/components/DynamicPost.vue";
import manifest from "../../manifest.json";
import { filterDate } from "@/util/dateFilter";

export default {
  middleware: ["retrieveQuery"],
  components: {
    DynamicPost
  },
  data() {
    return {
      shortname: "myonlineportfolio-app",
      url: "https://onlineportfolio-app.firebaseapp.com/blog"
    };
  },
  async asyncData({ params }) {
    let postInfo = manifest.find(post => post.slug === params.postslug);

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
  created() {
    this.$filterDate = filterDate;
  },
  head() {
    return {
      title: this.post.attributes.slug,
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

.curve-bar {
  position: relative;
  border-left: 20px solid rgb(55, 167, 204);
  border-top: 20px solid rgb(55, 167, 204);
  border-top-left-radius: 40px;
  height: 100%;
  padding: 10px;
  margin-left: 30px;
  color: $colorFg;
  margin-right: 10px;
  text-justify: auto;
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
.myPost {
  background: $backgroud-color;
}
.head {
  font-family: "Times New Roman", Times, serif;
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
//   // overflow: scroll;
// }
.hljs-function {
  margin-top: 15px;
  display: inline-block;
  padding: 10px;
}
.hljs-class {
  margin-top: 15px;
  display: inline-block;
  padding: 10px;
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
