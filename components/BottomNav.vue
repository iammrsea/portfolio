<template>
  <v-card height="50px" flat>
    <v-bottom-nav :value="true" absolute :active.sync="buttonNav" class="primary darken-4">
      <v-btn class="white--text" flat value="home" to="/">
        <span class="text-uppercase font-weight-bold">Home</span>
        <v-icon>home</v-icon>
      </v-btn>

      <v-btn color="primary" flat value="portfolio" to="/portfolio">
        <span class="text-uppercase pa-1 font-weight-bold portfolio--text">Portfolio</span>
        <v-icon class="portfolio--text font-weight-bold">person</v-icon>
      </v-btn>

      <v-btn color="primary" to="/blog" value="blog">
        <span class="text-uppercase pa-2 font-weight-bold portfolio--text">blog</span>
        <i class="fas fa-blog mt-2 portfolio--text font-weight-bold"></i>
      </v-btn>
      <v-btn color="primary" flat @click="cbt" value="cbt">
        <span class="text-uppercase pa-2 font-weight-bold portfolio--text">JAMB CBT</span>
        <i class="fas fa-pencil-alt mt-0 portfolio--text font-weight-bold"></i>
      </v-btn>
    </v-bottom-nav>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      buttonNav: "home"
    };
  },
  methods: {
    cbt() {
      window.location = `${window.location.href}/cbt`;
    }
  }
};
</script>
