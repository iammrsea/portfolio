<template>
  <v-layout row wrap>
    <v-flex xs12 sm7>
      <v-layout column>
        <v-flex xs12>Blog posts for a particular category</v-flex>
        <v-flex xs12 v-for="item in 2" :key="item">
          <post-preview></post-preview>
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
export default {
  components: {
    PostPreview,
    Categories
  }
};
</script>