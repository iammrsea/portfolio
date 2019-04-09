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
                  <!-- <v-avatar size="300px">
                    <img :src="require('@/assets/img/me.jpg')" alt="Andrew">
                  </v-avatar>-->
                  <v-img :src="require('@/assets/img/second.png')"></v-img>
                </v-flex>
              </v-layout>
              <v-layout row wrap justify-center>
                <v-flex xs12 sm7>
                  <p class="white--text subheading pa-1 mt-1">
                    I am a JavaScript Full-Stack Developer. I am passionate and
                    enthusiastic about any problems relating to Software
                    Engineering. I am not yet a JavaScript or Software expert, but I
                    love to read, code, learn and add to my skill sets everyday. I
                    find it fulfilling proffering solutions to software problems. I
                    have worked with Java/Android, but I'm my interest is currently
                    inclined towards JavaScript.
                  </p>
                </v-flex>
                <v-flex xs12 sm5>
                  <v-layout column>
                    <v-flex xs12>
                      <span class="mt-2" style="display:block">
                        <v-icon class="portfolio--text pa-1 left ml-2 heading">place</v-icon>
                        <span class="portfolio--text pa-1 left heading text-uppercase">Location:</span>
                        <span class="white--text pa-1 left heading">Nigeria</span>
                      </span>
                    </v-flex>
                    <v-flex xs12>
                      <span class="mt-4" style="display:block">
                        <v-icon class="portfolio--text pa-1 left ml-2 heading">email</v-icon>
                        <span class="portfolio--text pa-1 left heading text-uppercase">Email:</span>
                        <span class="white--text pa-1 left heading">Ekwughaandrew@gmail.com</span>
                      </span>
                    </v-flex>
                    <v-flex xs12>
                      <span class="mt-4" style="display:block">
                        <v-icon class="portfolio--text pa-1 left ml-2 heading">phone</v-icon>
                        <span class="portfolio--text pa-1 left heading text-uppercase">Phone:</span>
                        <span class="white--text pa-1 left heading">+2347067859271</span>
                      </span>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-layout justify-center>
                  <p
                    class="portfolio--text subheading pa-2 mt-2"
                  >You can hire me for your web or android app projects. Check out my portfolio for more information.</p>
                </v-layout>
              </v-layout>
            </v-container>
          </section>
        </v-layout>
      </v-card>
    </v-container>
    <v-card height="50px" flat>
      <v-bottom-nav :value="true" absolute :active.sync="buttonNav">
        <v-btn color="primary" flat value="home" to="/">
          <span class="text-uppercase font-weight-bold">Home</span>
          <v-icon>home</v-icon>
        </v-btn>

        <v-btn color="primary" flat value="portfolio" to="/portfolio">
          <span class="text-uppercase pa-1 font-weight-bold portfolio--text">Portfolio</span>
          <v-icon class="black--text font-weight-bold">person</v-icon>
        </v-btn>

        <v-btn color="primary" to="/blog" value="blog">
          <span class="text-uppercase pa-2 font-weight-bold portfolio--text">blog</span>
          <i class="fas fa-blog mt-2 black--text font-weight-bold"></i>
        </v-btn>
        <v-btn color="primary" flat @click="cbt" value="cbt">
          <span class="text-uppercase pa-2 font-weight-bold portfolio--text">JAMB CBT</span>
          <i class="fas fa-pencil-alt mt-0 black--text font-weight-bold"></i>
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
  methods: {
    cbt() {
      window.open("https://master-cbt.firebaseapp.com", "_blank");
    }
  },
  head() {
    return {
      title: "This is my custom title",
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
</style>
