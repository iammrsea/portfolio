<template>
  <v-card id="card" flat class="mx-3">
    <v-layout justify-center align-center column>
      <section id="about-me" class>
        <v-container>
          <p
            id="portfolio"
            v-scroll-reveal="left"
            class="text-xs-center text-uppercase font-weight-bold headline blue--text"
          >About Me</p>
          <v-layout justify-center class="mt-4">
            <v-flex xs12 v-scroll-reveal="right">
              <v-avatar size="200px">
                <img src="/photos/pic.png" alt="Andrew">
              </v-avatar>
            </v-flex>
          </v-layout>
          <v-layout justify-center>
            <v-flex xs12 sm8 md6>
              <v-layout column justify-center>
                <v-flex xs12>
                  <p
                    v-scroll-reveal="top"
                    class="white--text headline-2 pa-1 mt-1"
                  >{{aboutMe["about-me"]}}</p>
                </v-flex>
                <v-flex xs12>
                  <v-layout column align-content-end class="headline-2">
                    <v-flex xs12 v-scroll-reveal="right">
                      <span class="mt-2" style="display:block">
                        <v-icon class="blue--text pa-1 left ml-2">place</v-icon>
                        <span class="blue--text pa-1 left text-uppercase">Location:</span>
                        <span class="white--text pa-1 left">Nigeria</span>
                      </span>
                    </v-flex>
                    <v-flex xs12 v-scroll-reveal="left">
                      <span class="mt-4" style="display:block">
                        <v-icon class="blue--text pa-1 left ml-2">email</v-icon>
                        <span class="blue--text pa-1 left text-uppercase">Email:</span>
                        <span class="white--text pa-1 left">Ekwughaandrew@gmail.com</span>
                      </span>
                    </v-flex>
                    <v-flex xs12 v-scroll-reveal="right">
                      <span class="mt-4" style="display:block">
                        <v-icon class="blue--text pa-1 left ml-2">phone</v-icon>
                        <span class="blue--text pa-1 left text-uppercase">Phone:</span>
                        <span class="white--text pa-1 left">+2347067859271</span>
                      </span>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-layout justify-start align-content-start v-scroll-reveal="left">
                  <p class="white--text sub pa-2 mt-2 headline-2" style="align-text:left">
                    You can hire me for your web or android app projects. Check out my portfolio for more information and links to
                    some of the apps I have built.
                    <v-btn flat to="/portfolio" color="blue">Click Here</v-btn>
                  </p>
                </v-layout>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
    </v-layout>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      aboutMe: "",
      right: {
        origin: "right"
      },
      left: {
        origin: "left"
      },
      bottom: {
        origin: "bottom"
      },
      top: {
        origin: "top"
      }
    };
  },

  async created() {
    let data = await this.getData();
    this.aboutMe = data;
  },
  methods: {
    async getData() {
      let data = await import("@/data/pages/about-me.md");
      return data.attributes;
    }
  }
};
</script>
