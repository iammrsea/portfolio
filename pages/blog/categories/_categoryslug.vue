<template>
  <v-layout row wrap>
    <v-flex xs12 sm7>
      <v-layout column>
        <v-flex xs12>Blog posts for a particular category</v-flex>
        <v-flex v-for="(post,i) in posts" :key="i">
          <post-preview :post="post.attributes"></post-preview>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex sm5 class="hidden-xs-only">
      <h3 class="mt-4">Categories</h3>
      <Categories/>
    </v-flex>
  </v-layout>
</template>
<script>
import PostPreview from "@/components/blog/PostPreview";
import Categories from "@/components/blog/Categories";
import manifest from "@/manifest";

export default {
  components: {
    PostPreview,
    Categories
  },
  async asyncData({ params }) {
    let posts = [];
    for (let i = 0; i < manifest.length; i++) {
      if (manifest[i].category === params.categoryslug) {
        let url = manifest[i].url;
        let post = await import(`@/content/${url}`);
        posts.push(post);
      }
    }
    return { posts };
  },
  data() {
    return {};
  },
  computed: {
    param() {
      return this.$route.params;
    }
  },
  computed: {
    // posts() {
    //   return this.$store.getters["blog/postsByCategory"](
    //     this.$route.params.categoryslug
    //   );
    // }
  }
};
</script>