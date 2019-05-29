<template>
  <v-card class="my-3" dark id="top">
    <v-card-title primary-title class="text-sm-center">Categories</v-card-title>

    <v-card-text>
      <v-divider></v-divider>
      <v-list>
        <div v-for="(category,i) in categories" :key="i">
          <v-list-tile @click="showPostsBasedCategory(category.toLowerCase())">
            <v-list-tile-content>{{category}}</v-list-tile-content>
          </v-list-tile>
          <v-divider></v-divider>
        </div>
      </v-list>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  methods: {
    showPostsBasedCategory(category) {
      this.$router.push({
        path: `/blog/categories/${category}`,
        query: { page: 1 }
      });
    }
  },
  computed: {
    categories() {
      return this.$store.getters["blog/categories"];
    }
  }
};
</script>
