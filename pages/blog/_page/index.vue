<template>
  <v-card id="blog">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm7>
          <v-layout column>
            <v-flex xs12 class="headline">Blog posts</v-flex>
            <v-flex xs12 v-for="(post,i) in posts" :key="i">
              <post-preview :post="post.attributes"></post-preview>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex sm5 class="hidden-xs-only">
          <Categories/>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>
<script>
import PostPreview from "@/components/blog/PostPreview";
import Categories from "@/components/blog/Categories";
import manifest from "@/static/manifest.json";
export default {
  components: {
    PostPreview,
    Categories
  },
  // validate({ params }) {
  //   // Must be a number
  //   console.log(params.id);
  //   return /^\d+$/.test(params.id);
  // },
  data() {
    return {
      allPosts: []
    };
  },
  async fetch({ store }) {
    let posts = [];
    for (let i = 0; i < manifest.length; i++) {
      let url = manifest[i].url;
      let post = await import(`@/content/${url}`);
      posts.push(post);
    }

    store.dispatch("blog/addPosts", posts);
    //return { posts };
  },
  created() {},
  computed: {
    posts() {
      return this.$store.getters["blog/getPosts"];
    }
  },
  head() {
    return {
      title: "Blog posts",
      meta: [{ hid: "description", name: "description", content: "blog posts" }]
    };
  }
};
</script>

<style scoped>
#blog {
  margin-top: -100px;
  z-index: 3;
}
</style>
