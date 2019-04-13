<template>
  <v-container class="myPost">
    <v-btn flat color="primary" v-ripple @click="previous">
      <v-icon left>arrow_back</v-icon>
      <span class="text-capitalize">Go Back</span>
    </v-btn>
    <h2>{{post.attributes.title}}</h2>
    <dynamic-post
      :renderFunc="post.default.vue.render"
      :staticRenderFuncs="post.default.vue.staticRenderFns"
    ></dynamic-post>
  </v-container>
</template>
<script>
import PostDetail from "@/components/blog/PostDetail";
import DynamicPost from "@/components/DynamicPost.vue";
import manifest from "../../manifest.json";

export default {
  middleware: ["retrieveQuery"],
  components: {
    DynamicPost
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
  }
};
</script>
<style lang="scss" scoped>
$backgroud-color: brown;
.myPost {
  background: $backgroud-color;
}
</style>
