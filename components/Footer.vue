<template>
  <footer class="primary darken-4" style="position:relative">
    <v-container>
      <v-layout row justify-center>
        <v-flex xs12 class="text-xs-center">
          <span class="white--text subheading pa-2">
            Powered by
            <span class="font-weight-bold">TripeS</span>
          </span>
          <span class="pa-2 ml-2 white--text subheading">&copy; 20019 and Beyond</span>
        </v-flex>
        <v-flex v-if="homePath">
          <v-btn absolute dark fab top @click="$vuetify.goTo(`#top`,options)" right color="pink">
            <v-icon>arrow_drop_up</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      options: {
        duration: 800,
        offset: -5,
        easing: "easeInOutCubic"
      },
      right: {
        origin: "right"
      }
    };
  },
  computed: {
    homePath() {
      return this.$route.path === "/" || this.$route.path.match("/blog");
    }
  }
};
</script>
