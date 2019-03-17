<template>
  <v-card class="my-2 mr-3" raised>
    <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">Post title</h3>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quod tempore ipsa cumque deleniti animi? Cupiditate dolore officia id amet numquam earum culpa sapiente dicta ut. Earum corrupti quisquam eligendi!</div>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn flat color="primary" @click="postDetail">Explore...</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  methods: {
    postDetail() {
      this.$router.push("/blog/ee8e0e8e");
    }
  }
};
</script>
