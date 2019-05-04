<template>
  <div id="container">
    <v-container>
      <v-card id="card">
        <v-layout justify-center align-center column>
          <section id="about-me" class>
            <v-container>
              <span class="text-uppercase headline portfolio--text">About Me</span>
              <v-layout justify-center class="mt-4">
                <v-flex xs12>
                  <v-avatar size="200px">
                    <img src="/photos/pic.png" alt="Andrew">
                  </v-avatar>
                  <!-- <v-img :src="require('@/assets/img/second.png')"></v-img> -->
                </v-flex>
              </v-layout>
              <v-layout column justify-center>
                <v-flex xs12>
                  <p class="white--text headline-2 pa-1 mt-1">{{aboutMe["about-me"]}}</p>
                </v-flex>
                <v-flex xs12>
                  <v-layout column align-content-end class="headline-2">
                    <v-flex xs12>
                      <span class="mt-2" style="display:block">
                        <v-icon class="portfolio--text pa-1 left ml-2">place</v-icon>
                        <span class="portfolio--text pa-1 left text-uppercase">Location:</span>
                        <span class="white--text pa-1 left">Nigeria</span>
                      </span>
                    </v-flex>
                    <v-flex xs12>
                      <span class="mt-4" style="display:block">
                        <v-icon class="portfolio--text pa-1 left ml-2">email</v-icon>
                        <span class="portfolio--text pa-1 left text-uppercase">Email:</span>
                        <span class="white--text pa-1 left">Ekwughaandrew@gmail.com</span>
                      </span>
                    </v-flex>
                    <v-flex xs12>
                      <span class="mt-4" style="display:block">
                        <v-icon class="portfolio--text pa-1 left ml-2">phone</v-icon>
                        <span class="portfolio--text pa-1 left text-uppercase">Phone:</span>
                        <span class="white--text pa-1 left">+2347067859271</span>
                      </span>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-layout justify-start align-content-start>
                  <p
                    class="portfolio--text sub pa-2 mt-2 headline-2"
                    style="align-text:left"
                  >You can hire me for your web or android app projects. Check out my portfolio for more information.</p>
                </v-layout>
              </v-layout>
            </v-container>
          </section>
        </v-layout>
      </v-card>
    </v-container>
    <v-card height="50px" flat>
      <v-bottom-nav :value="true" absolute :active.sync="buttonNav" color="black">
        <v-btn color="primary" flat value="home" to="/">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonNav: "home",
      title: ""
    };
  },
  async asyncData() {
    let data = await import("@/data/pages/about-me.md");
    return { aboutMe: data.attributes };
  },
  methods: {
    cbt() {
      window.location = `${window.location.href}/cbt`;
    }
  },
  head() {
    return {
      title: "Andrew Ekwugha | JavaScript Developer",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "This is my custom description"
        }
      ]
    };
  }
};
</script>
<style scoped>
#card {
  background: #424242;
  margin-top: -6px;
  z-index: 2;
}

section {
  text-align: center;
  align-content: center;
  width: 100%;
}
p {
  text-align: justify;
}
#profession {
  margin-top: 400px;
}
#intro {
  align-content: center;
  text-align: center;
  color: #fff;
}
#container {
  background: #e0e0e0;
  margin-top: -90px;
}
.icon {
  display: block !important;
}
.fas {
  font-weight: bolder;
  font-size: 18px;
}
.headline {
  line-height: 1.5 !important;
  font-family: "Times New Roman", Times, serif !important;
}
@media screen and (max-width: 480px) {
  .headline-2 {
    font-size: 18px !important;
  }
}
.headline-2 {
  line-height: 1.5 !important;
  font-family: "Times New Roman", Times, serif !important;
  font-size: 19px;
}
</style>
