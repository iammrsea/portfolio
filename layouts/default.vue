<template >
  <v-app v-scroll="onScroll">
    <section v-if="$route.path==='/'">
      <Navbar :isTransparent="isTransparent" :dark="dark"/>
      <v-img
        :src="require('@/assets/img/adventurealtitude.jpg')"
        min-height="100"
        style="height:100%"
      ></v-img>
    </section>
    <section v-else-if="$route.path==='/blog'">
      <Navbar :isTransparent="isTransparent" :dark="dark"/>
      <v-img :src="require('@/assets/img/blog3.jpg')" min-height="100" style="height:100%"></v-img>
    </section>
    <section v-else-if="$route.path===`/blog/${$route.params.postslug}`">
      <Navbar :isTransparent="isTransparent" :dark="dark"/>
      <v-img
        :src="require('@/assets/img/blog3.jpg')"
        min-height="100"
        aspect-ratio="2.78"
        style="height:100%"
      ></v-img>
    </section>

    <v-content>
      <nuxt/>
    </v-content>

    <!-- <v-footer>
      <span class="text-xs-center">&copy; 2019</span>
    </v-footer>-->
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  components: {
    Navbar
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
  background: #fff;
}
</style>
