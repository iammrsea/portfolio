<template>
  <v-container class="myPost">
    <v-btn flat color="primary" v-ripple @click="previous">
      <v-icon left>arrow_back</v-icon>
      <span class="text-capitalize">Go Back</span>
    </v-btn>
    <h2>{{post.attributes.title}}</h2>
    <dynamic-post :renderFunc="post.vue.render" :staticRenderFuncs="post.vue.staticRenderFns"></dynamic-post>
  </v-container>
</template>
<script>
import PostDetail from "@/components/blog/PostDetail";
import DynamicPost from "@/components/DynamicPost.vue";
export default {
  components: {
    DynamicPost
  },

  computed: {
    post() {
      return this.$store.getters["blog/postBySlug"](
        this.$route.params.postslug
      );
    }
  },
  methods: {
    previous() {
      this.$router.push("/blog");
    }
  },
  mounted() {
    this.$injectedFunction();
  }
};
</script>
<style lang="scss" scoped>
$backgroud-color: brown;
.myPost {
  background: $backgroud-color;
}
</style>
