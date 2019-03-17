<template>
  <v-card id="post-detail">
    <v-container>
      <v-btn flat color="primary" v-ripple @click="previous">
        <v-icon left>arrow_back</v-icon>
        <span class="text-capitalize">Go Back</span>
      </v-btn>
      <h1>Title of post</h1>
      <span>Written by .....author's name</span>
      <div id="post-body">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa maxime hic quod asperiores in vitae repudiandae dolor. Provident aperiam pariatur consequatur velit, blanditiis vitae recusandae molestiae, ipsum, sed fugiat eos?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa maxime hic quod asperiores in vitae repudiandae dolor. Provident aperiam pariatur consequatur velit, blanditiis vitae recusandae molestiae, ipsum, sed fugiat eos?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa maxime hic quod asperiores in vitae repudiandae dolor. Provident aperiam pariatur consequatur velit, blanditiis vitae recusandae molestiae, ipsum, sed fugiat eos?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa maxime hic quod asperiores in vitae repudiandae dolor. Provident aperiam pariatur consequatur velit, blanditiis vitae recusandae molestiae, ipsum, sed fugiat eos?</p>
      </div>
    </v-container>
  </v-card>
</template>
<script>
export default {
  methods: {
    previous() {
      this.$router.push("/blog");
    }
  }
};
</script>
<style scoped>
#post-detail {
  margin-top: -100px;
  z-index: 3;
}
</style>
