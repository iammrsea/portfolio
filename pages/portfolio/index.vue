<template>
  <div class="card">
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
          @click="$vuetify.goTo('#contact',options)"
          flat
        >Contact and Hire Me</v-btn>
      </div>
      <div id="icons">
        <i class="fab fa-facebook" @click="facebook"></i>
        <a href="mailto:ekwughaandrew@yahoo.com">
          <i class="far fa-envelope fab"></i>
        </a>
      </div>
    </div>
    <div class="slaveSidebar">
      <section id="intro">
        <v-img :src="require('@/assets/img/wall2.jpg')" height="600" id="wall">
          <div
            class="portfolio--text headline text-xs-center mt-3 ml-2 left triple-s"
            primary-title
          >
            <nuxt-link to="/" tag="span" style="cursor:pointer">
              <v-icon class="portfolio--text mb-1">arrow_back</v-icon>TripleS
            </nuxt-link>
          </div>
          <div id="profession">
            <span
              class="display-2 text-uppercase text-xs-right text-md-right mr-5 font-weight-bold"
            >Andrew Ekwugha</span>
            <span
              class="display-2 portfolio--text text-uppercase text-xs-right text-md-right mr-5 mt-4 font-weight-bold"
            >JavaScript</span>
            <span
              class="display-2 portfolio--text text-uppercase text-xs-right text-md-right mt-2 mr-5 font-weight-bold"
            >Developer</span>
          </div>
        </v-img>
      </section>
      <section id="about-me" class>
        <v-container>
          <span class="text-uppercase headline portfolio--text">About Me</span>
          <v-layout justify-center class="mt-4">
            <v-flex xs12>
              <img :src="require('@/assets/img/me2.jpg')" height="400" alt="Andrew">
            </v-flex>
          </v-layout>
          <v-layout column justify-center>
            <v-flex xs12>
              <p class="white--text headline-2 pa-1 mt-3">{{aboutMe["about-me"]}}</p>
            </v-flex>
            <v-flex xs12>
              <v-layout column class="headline-2">
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
          </v-layout>
        </v-container>
      </section>
      <section id="skills">
        <v-container>
          <span class="text-uppercase headline portfolio--text">My Skill Sets</span>

          <v-timeline :dense="breakpoint">
            <v-timeline-item v-for="(skill,i) in skills" :key="i" color="portfolio" fill-dot small>
              <v-card class="elevation-2">
                <v-card-title class="headline">{{ skill }}</v-card-title>
              </v-card>
            </v-timeline-item>
            <v-timeline-item color="portfolio" small fill-dot>
              <v-card class="elevation-2">
                <v-card-title class="headline font-weight-bold">My Resume</v-card-title>
                <v-card-text class="headline">
                  <p>Would you like to take a look at my resume?</p>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    @click="download"
                    class="headline text-capitalize"
                    flat
                    color="portfolio"
                  >Download</v-btn>
                </v-card-actions>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-container>
      </section>
      <section id="education">
        <v-container>
          <span class="text-uppercase sub portfolio--text">Education</span>
          <div>
            <v-timeline :dense="breakpoint">
              <v-timeline-item small fill-dot color="portfolio">
                <template v-slot:opposite>
                  <span class="portfolio--text sub">2004-2010</span>
                </template>
                <v-card class="elevation-2" color="#424242" dark>
                  <v-card-title class="sub portfolio--text">
                    <span>Modern Child College</span>
                  </v-card-title>
                  <v-card-text class="sub">
                    <p>West African Examination Council (WAEC) Certificate</p>
                    <p class="portfolio--text sub hidden-sm-and-up">2004-2010</p>
                  </v-card-text>
                </v-card>
              </v-timeline-item>
              <v-timeline-item small fill-dot color="portfolio">
                <template v-slot:opposite>
                  <span class="portfolio--text subheaing">2013-2018</span>
                </template>
                <v-card class="elevation-2" color="#424242" dark>
                  <v-card-title class="sub portfolio--text">
                    <span>University of Uyo, Uyo</span>
                  </v-card-title>
                  <v-card-text class="sub">
                    <p>Bachelor of Engineering</p>
                    <p>Electrical/Electronic Engineering</p>
                    <p class="portfolio--text sub hidden-sm-and-up">2013-2018</p>
                  </v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </div>
        </v-container>
      </section>
      <section id="contact" style="background:#424242">
        <v-container>
          <span class="text-uppercase headline portfolio--text">Hire Me</span>
          <v-card class="hire-me ma-1 pa-2" flat>
            <v-card-text class="hire-me headline-2">{{aboutMe["hire-me"]}}</v-card-text>
            <v-card-actions class="hire-me">
              <v-layout column class="headline-2">
                <v-flex xs12>
                  <span class="mt-2" style="display:block">
                    <v-icon class="portfolio--text pa-1 left ml-2">place</v-icon>
                    <span class="portfolio--text pa-1 left text-uppercase">Location:</span>
                    <span class="white--text pa-1 left">Uyo, Nigeria</span>
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
            </v-card-actions>
          </v-card>
        </v-container>
      </section>
      <v-layout justify-center align-center class="mt-2">
        <v-flex xs12>
          <section>
            <img :src="require('@/assets/img/bottom.jpg')" height="400" alt="Andrew">
          </section>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData() {
    let data = await import("@/data/pages/about-me.md");
    return { aboutMe: data.attributes };
  },
  data() {
    return {
      options: {
        duration: 800,
        offset: -5,
        easing: "easeInOutCubic"
      },

      skills: [
        "Excellent understanding of object-oriented programming",
        "Excellent grasp of core concepts of Java and Android",
        "Excellent knowledge of object-oriented JavaScript",
        "Excellent understanding of NodeJs, ExpressJs and MongoDb",
        "VueJs/NuxtJs, Vuetify, CSS, SASS, HTML 5, and Bootstrap 4",
        "JavaScript full-stack development",
        "Good knowledge of version control systems such as Git and github etc",
        "Excellent understanding of bundlers such as webpack"
      ],
      title: "Andrew Ekwugha | JavaScript Developer"
    };
  },
  computed: {
    breakpoint() {
      // console.log(this.$vuetify.breakpoint.smAndUp);
      return !this.$vuetify.breakpoint.smAndUp;
    }
  },
  methods: {
    download() {
      window.open(require("@/assets/pdfs/CV.pdf"), "_blank");
    },
    facebook() {
      window.open("https://www.facebook.com/ekwughaandrew", "_blank");
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "A software developer"
        },
        { hid: "author", name: "author", content: "Andrew Ekwugha" },
        {
          hid: "keywords",
          name: "keywords",
          content: this.aboutMe.keywords
        }
      ]
    };
  }
};
</script>

<style scoped>
.card {
  background: #212121;
  margin: 0px !important;
}
span.display-2 {
  display: block;
}
.about {
  align-content: center;
  text-align: center;
}
.triple-s {
  display: none;
}
.master-sidebar {
  background: #000;
  height: 100%; /* Full-height: remove this if you want "auto" height */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #111; /* Black */
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 20px;
  width: 400px;
  overflow-y: auto;
}

.slaveSidebar {
  margin-left: 400px;
}
.work {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 20px;
  text-transform: capitalize;
}
.fab {
  color: white;
  font-size: 25px;
  padding: 15px;
  margin-right: 5px;
}
.fab:hover {
  background: #424242;
}

#icons {
  align-items: flex-start;
  align-content: center;
  text-align: center;
  margin-bottom: 10px;
  margin-top: 20px;
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
.hire-me {
  background: #424242;
  width: 100%;
  color: #fff;
  text-align: justify;
}
#contact {
  background: #424242;
}
@media screen and (max-width: 955px) {
  .master-sidebar {
    display: none;
  }
  .slaveSidebar {
    margin-left: 0px;
  }
  .triple-s {
    display: block;
  }
  #profession {
    margin-top: 350px;
  }
}
@media screen and (max-width: 480px) {
  .headline-2 {
    font-size: 18px !important;
  }
}
.headline {
  line-height: 1.5 !important;
  font-family: "Times New Roman", Times, serif !important;
}
.headline-2 {
  line-height: 1.5 !important;
  font-family: "Times New Roman", Times, serif !important;
  font-size: 19px;
}
</style>
