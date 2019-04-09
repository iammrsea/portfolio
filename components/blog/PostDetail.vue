<template>
  <v-card id="post-detail">
    <v-container>
      <v-btn flat color="primary" v-ripple @click="previous">
        <v-icon left>arrow_back</v-icon>
        <span class="text-capitalize">Go Back</span>
      </v-btn>
      <h1></h1>
      <span>Written by</span>
      <!-- <dynamic-markdown :renderFunc="post.vue.render" :staticRenderFuncs="post.vue.staticRenderFns"></dynamic-markdown> -->
    </v-container>
  </v-card>
</template>
<script>
import DynamicPost from "@/components/DynamicPost.vue";
export default {
  components: {
    DynamicPost
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
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
