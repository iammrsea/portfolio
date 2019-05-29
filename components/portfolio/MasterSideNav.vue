<template>
  <div class="master-sidebar hidden-xs-only">
    <div class="portfolio--text headline text-xs-center" primary-title>
      <nuxt-link to="/" tag="span" style="cursor:pointer">
        <v-icon class="portfolio--text mb-1">arrow_back</v-icon>TripleS
      </nuxt-link>
    </div>
    <h1
      class="text-md-center pa-3 portfolio--text display-2 mt-3"
      style="cursor:pointer"
      @click="$vuetify.goTo('#intro',options)"
    >Mr SEA</h1>
    <p
      class="white--text text-xs-center display-1 my-3"
      style="cursor:pointer"
      @click="$vuetify.goTo('#intro',options)"
    >Andrew Ekwugha Sopuruchi</p>
    <div class="work">
      <v-btn
        dark
        color="white--text"
        class="text-capitalize title font-weight-thin"
        @click="$vuetify.goTo('#about-me',options)"
        flat
      >About Me</v-btn>
    </div>
    <div class="work">
      <v-btn
        dark
        color="white--text"
        class="text-capitalize title font-weight-thin"
        @click="$vuetify.goTo('#skills',options)"
        flat
      >Skill Sets</v-btn>
    </div>
    <div class="work">
      <v-btn
        dark
        color="white--text"
        class="text-capitalize title font-weight-thin"
        @click="$vuetify.goTo('#education',options)"
        flat
      >Education</v-btn>
    </div>
    <div class="work">
      <v-btn
        dark
        color="white--text"
        class="text-capitalize title font-weight-thin"
        @click="$vuetify.goTo('#jobs',options)"
        flat
      >My Previous Work</v-btn>
    </div>
    <div class="work">
      <v-btn
        dark
        color="white--text"
        class="text-capitalize title font-weight-thin"
        @click="$vuetify.goTo('#contact',options)"
        flat
      >Contact and Hire Me</v-btn>
    </div>
    <div id="icons">
      <i class="fab fa-facebook" @click="facebook"></i>
      <i class="fab fa-github" @click="github"></i>
      <a href="mailto:ekwughaandrew@yahoo.com">
        <i class="far fa-envelope fab"></i>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: {
        duration: 800,
        offset: -5,
        easing: "easeInOutCubic"
      }
    };
  },
  methods: {
    facebook() {
      window.open("https://www.facebook.com/ekwughaandrew", "_blank");
    },
    github() {
      window.open("https://www.github.com/iammrsea", "_blank");
    }
  }
};
</script>
