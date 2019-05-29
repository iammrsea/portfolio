<template>
  <div>
    <v-toolbar app dark class="primary">
      <v-toolbar-side-icon @click="drawer = !drawer" class="hidden-md-and-up"/>

      <v-toolbar-title>
        <nuxt-link to="/" tag="span" style="cursor:pointer">TripleS</nuxt-link>
      </v-toolbar-title>
      <v-spacer/>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat class to="/">HOME</v-btn>
        <v-btn
          v-if="$route.path==='/'"
          flat
          class
          @click="$vuetify.goTo(`#portfolio`,options)"
        >PORTFOLIO</v-btn>
        <v-btn flat class :to="{path:'/blog',query:{page:1}}">BLOG</v-btn>
        <v-btn flat class @click="cbt">JAMB CBT</v-btn>
        <v-btn flat class @click="translator">FIGURE TRANSLATOR</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" app disable-resize-watcher>
      <v-list>
        <v-list-tile v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-tile-action>
            <div v-if="item.title==='BLOG'">
              <i class="fas fa-blog"></i>
            </div>
            <div v-else>
              <v-icon>{{ item.icon }}</v-icon>
            </div>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"/>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile class="cbt">
          <v-list-tile-action>
            <i class="fas fa-pencil-alt"></i>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title @click="cbt">JAMB CBT</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile class="cbt">
          <v-list-tile-action>
            <i class="fas fa-pencil-alt"></i>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title @click="translator">FIGURE TRANSLATOR</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      drawer: false,
      options: {
        duration: 800,
        offset: -5,
        easing: "easeInOutCubic"
      },
      items: [
        {
          icon: "home",
          title: "HOME",
          to: "/"
        },

        {
          icon: "person",
          title: "PORTFOLIO",
          to: "/portfolio"
        },
        {
          icon: "bubble_chart",
          title: "BLOG",
          to: { path: "/blog", query: { page: 1 } }
        }
      ]
    };
  },
  methods: {
    cbt() {
      // window.open("https://master-cbt.firebaseapp.com", "_blank");
      window.location = `${window.location.origin}/cbt`;
    },
    translator() {
      window.location = `${window.location.origin}/translator`;
    }
  }
};
</script>
<style scoped>
.transparent {
  background: transparent !important;
  border-color: transparent !important;
}
.elevation {
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 0 rgba(0, 0, 0, 0.14),
    0 0 0 0 rgba(0, 0, 0, 0.12) !important;
}
#drawer {
  border-radius: 50%;
}
.cbt {
  cursor: pointer;
}
.cbt:hover {
  background: rgb(241, 238, 238);
}
</style>
