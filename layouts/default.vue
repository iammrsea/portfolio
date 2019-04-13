<template >
  <v-app v-scroll="onScroll">
    <section v-if="$route.path==='/'">
      <Navbar :isTransparent="isTransparent" :dark="dark"/>
      <v-img :src="require('@/assets/img/section.jpg')" min-height="100" style="height:100%">
        <v-container>
          <div id="showcase">
            <marquee>
              <h1
                class="heading hidden-md-and-up text-uppercase"
              >Welcome to my awesome online office and platform</h1>
            </marquee>
          </div>
          <div id="showcase-lg">
            <marquee>
              <h1
                class="display-1 hidden-sm-and-down text-uppercase"
              >Welcome to my awesome online office and platform</h1>
            </marquee>
          </div>
        </v-container>
      </v-img>
    </section>
    <section v-else-if="$route.path==='/blog'">
      <blog-nav></blog-nav>
      <!-- <Navbar :isTransparent="isTransparent" light/> -->
      <!-- <v-img :src="require('@/assets/img/blog3.jpg')" height="300"></v-img> -->
    </section>
    <section v-else-if="$route.path===`/blog/${$route.params.postslug}`">
      <!-- <Navbar :isTransparent="isTransparent" :dark="dark"/>
      <v-img
        :src="require('@/assets/img/blog3.jpg')"
        min-height="100"
        aspect-ratio="2.78"
        style="height:100%"
      ></v-img>-->
    </section>

    <v-content>
      <nuxt/>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import BlogNav from "@/components/blog/BlogNav";
export default {
  components: {
    Navbar,
    BlogNav
  },
  data() {
    return {
      clipped: false,

      fixed: false,
      isTransparent: true,
      dark: true,

      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
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
  margin-top: 10%;
  text-align: justify;
  color: #fff;
}
</style>
