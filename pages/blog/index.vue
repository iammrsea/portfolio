<template>
  <v-card id="blog">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm7>
          <v-layout column>
            <v-flex xs12 class="headline">Blog posts</v-flex>
            <v-flex xs12 v-for="item in 4" :key="item">
              <post-preview></post-preview>
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
export default {
  components: {
    PostPreview,
    Categories
  }
};
</script>

<style scoped>
#blog {
  margin-top: -100px;
  z-index: 3;
}
</style>
