<template>
  <div>
    <v-toolbar fixed color="#080818" app dark>
      <!-- <v-toolbar-side-icon class @click="drawer = !drawer"  class="hidden-md-and-up"/> -->
      <v-btn flat @click="drawer = !drawer" id="drawer" class="hidden-sm-and-up">
        <v-icon>menu</v-icon>
      </v-btn>

      <v-toolbar-title>
        <nuxt-link to="/" tag="span" style="cursor:pointer">TripleS</nuxt-link>
      </v-toolbar-title>
      <v-spacer/>
      <div class="hidden-xs-only">
        <v-btn flat class to="/">HOME</v-btn>
        <v-btn flat class to="/portfolio">PORTFOLIO</v-btn>
        <v-btn flat class :to="{path:'/blog',query:{page:1}}">BLOG</v-btn>
        <v-btn flat class @click="cbt">JAMB CBT</v-btn>
      </div>
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
        <v-list-tile>
          <v-list-tile-action>
            <i class="fas fa-pencil-alt"></i>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title @click="cbt">JAMB CBT</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  props: {
    dark: {
      type: Boolean
    }
  },
  data() {
    return {
      drawer: false,
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
      console.log(window.location);
      // window.location = `${window.location.href}/cbt`;
      window.location = `${window.location.origin}/cbt`;
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
</style>
