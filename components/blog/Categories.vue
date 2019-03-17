<template>
  <v-card class="my-3">
    <v-card-title primary-title class="text-sm-center" style="border:red solid 2px">Categories</v-card-title>

    <v-card-text>
      <v-divider></v-divider>
      <v-list>
        <div v-for="category in 4" :key="category">
          <v-list-tile @click="nothing">
            <v-list-tile-content>Category {{category}}</v-list-tile-content>
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
    nothing() {
      this.$router.push("/blog/categories/technology");
    }
  }
};
</script>
