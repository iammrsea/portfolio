<template>
  <v-container>
    <h2>This is the demo page</h2>
    <!-- <div v-html="firstPost.html"></div>
    <div>
      <v-img :src="require('~/assets/img/blog3.jpg')" alt="my image"></v-img>
    </div>
    <p>I made some changes, didn't I?</p>-->
    <!-- <dynamic-post
      :renderFunc="firstPost.vue.render"
      :staticRenderFuncs="firstPost.vue.staticRenderFns"
    ></dynamic-post>-->
  </v-container>
</template>
<script>
import firstPost from "~/content/blog/technology/first-post.md";
import DynamicPost from "@/components/DynamicPost.vue";
import manifest from "@/static/manifest.json";

export default {
  components: {
    DynamicPost
  },
  data() {
    return {
      firstPost: "",
      posts: []
    };
  },
  async asyncData({ app }) {
    let posts = [];
    for (let i = 0; i < manifest.length; i++) {
      let url = manifest[i].url;
      let post = await import(`@/content/${url}`);
      posts.push(post.default);
    }
    return { posts };
  },
  created() {
    console.log(this.posts);
    console.log(manifest);

    //console.log(this.posts);
    ///  this.manifest = manifest;
    // this.$axios
    //   .get(url)
    //   .then(data => {
    //     console.log(data.data);
    //     //console.log(data.data[0].url);
    //   })
    //   .catch(e => {
    //     console.log(e);
    //   });
    //console.log(manifest);
    // import(`/@${this.manifest[0].url}`)
    //   .then(data => {
    //     console.log(data);
    //   })
    //   .catch(e => {
    //     console.log(e);
    //   });
    //
    //   .get("content.json")
    //   .then(data => {
    //     console.log(data);
    //   })
    //   .catch(e => {
    //     console.log(e.message);
    //   });
    // import("@/static/content.json")
    //   .then(data => {
    //     console.log(data);
    //   })
    //   .catch(e => {
    //     console.log(e);
    //   });
    // import("~/content/blog/technology/first-post.md").then(post =>
    //   console.log(post)
    // );
    // console.log(firstPost);
    // console.log(firstPost.vue.component.render);
    // console.log(listOfPosts);
    // this.firstPost = firstPost;
  }
};
</script>
