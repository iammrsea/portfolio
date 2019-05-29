<template >
  <v-app v-scroll="onScroll">
    <section v-if="$route.path==='/'">
      <Navbar/>
      <section id="top">
        <v-img :src="require('@/assets/img/section.jpg')" min-height="100" style="height:100%">
          <v-layout
            row
            wrap
            id="showcase-lg"
            class="white--text text-uppercase article-title"
            :class="{'display-2':mdAndUp}"
          >
            <v-flex xs12 v-scroll-reveal="top">
              <p class="text-xs-center">Welcome</p>
            </v-flex>
            <v-flex xs12 v-scroll-reveal="left">
              <p class="text-xs-center">To</p>
            </v-flex>
            <v-flex xs12 v-scroll-reveal="right">
              <p class="text-xs-center">Sea Software Solutions</p>
            </v-flex>
            <v-flex xs12 v-scroll-reveal="bottom">
              <p class="text-xs-center text-capitalize mt-3">(TripleS)</p>
            </v-flex>
          </v-layout>
        </v-img>
      </section>
    </section>
    <section v-else-if="$route.path==='/blog'">
      <Navbar/>
    </section>
    <section v-else-if="$route.path===`/blog/categories/${$route.params.categoryslug}`">
      <Navbar/>
    </section>

    <v-content>
      <nuxt/>
    </v-content>

    <Footer v-if="notPortfolioPath"/>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import BlogNav from "@/components/blog/BlogNav";
import Footer from "@/components/Footer";

export default {
  components: {
    Navbar,
    BlogNav,
    Footer
  },
  data() {
    return {
      right: {
        origin: "right"
      },
      left: {
        origin: "left"
        // distance: "60px;"
      },
      bottom: {
        origin: "bottom"
      },
      top: {
        origin: "top"
      }
    };
  },
  methods: {
    onScroll(e) {
      const scrollY = e.path[1].scrollY;
      if (scrollY >= 100) {
        this.isTransparent = false;
        this.dark = false;
      } else {
        this.isTransparent = true;
        this.dark = true;
      }
    }
  },
  computed: {
    mdAndUp() {
      return (
        this.$vuetify.breakpoint.name === "md" ||
        this.$vuetify.breakpoint.name === "lg" ||
        this.$vuetify.breakpoint.name === "xl"
      );
    },
    notPortfolioPath() {
      return this.$route.path !== "/portfolio";
    }
  }
};
</script>
<style scoped>
.v-image {
  z-index: 1;
}

body {
  background: #040028 !important;
}
#showcase {
  margin-top: 20%;
  text-align: justify;
  color: #fff;
}
#showcase-lg {
  margin-top: 20%;
  color: #fff;
}
.article-title {
  margin: 0;
  padding-bottom: 0.5em;
  font-size: 28px;
  letter-spacing: 0.0175em;
  text-transform: uppercase;
  text-shadow: 3px 3px 0 #433a8f;
}
</style>
