<template>
  <v-card class="my-3">
    <v-card-title primary-title class="text-sm-center" style="border:red solid 2px">Categories</v-card-title>

    <v-card-text>
      <v-divider></v-divider>
      <v-list>
        <div v-for="(category,i) in categories" :key="i">
          <v-list-tile @click="nothing(category.toLowerCase())">
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
    nothing(category) {
      this.$router.push(`/blog/categories/${category}`);
    }
  },
  computed: {
    categories() {
      return this.$store.getters["blog/categories"];
    }
  }
};
</script>
