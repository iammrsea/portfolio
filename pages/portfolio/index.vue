<template>
  <div class="card">
    <div class="master-sidebar hidden-xs-only">
      <div class="portfolio--text headline text-xs-center" primary-title>
        <nuxt-link to="/" tag="span" style="cursor:pointer">
          <v-icon class="portfolio--text">arrow_back</v-icon>TripleS
        </nuxt-link>
      </div>
      <h1 class="text-md-center pa-3 portfolio--text display-2 mt-3">Mr SEA</h1>
      <p class="white--text text-xs-center display-1 my-3">Andrew Ekwugha Sopuruchi</p>
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
        >Contact</v-btn>
      </div>
      <div id="icons">
        <i class="fab fa-facebook"></i>
        <i class="fab fa-facebook"></i>
        <i class="far fa-envelope fab"></i>
      </div>
    </div>
    <div class="slaveSidebar">
      <section id="intro">
        <v-img :src="require('@/assets/img/wall2.jpg')" height="600" id="wall">
          <div
            class="portfolio--text headline text-xs-center mt-3 ml-2 left triple-s"
            primary-title
          >
            <v-icon class="portfolio--text mb-1">arrow_back</v-icon>
            <nuxt-link to="/" tag="span" style="cursor:pointer">TripleS</nuxt-link>
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
              <v-avatar size="200px">
                <img :src="require('@/assets/img/me2.jpg')" alt="Andrew">
              </v-avatar>
            </v-flex>
          </v-layout>
          <v-layout row wrap justify-center>
            <v-flex xs12 sm7>
              <p class="white--text subheading pa-1 mt-1">
                I am a JavaScript Full-Stack Developer. I am passionate and enthusiastic about any problems
                relating to Software Engineering. I am not yet a JavaScript or Software expert, but I love to
                read, code, learn and add to my skill sets everyday. I find it fulfilling proffering solutions
                to software problems. I have worked with Java/Android, but I'm my interest is currently inclined
                towards JavaScript.
              </p>
            </v-flex>
            <v-flex xs12 sm5>
              <v-layout column>
                <v-flex xs12>
                  <span class="mt-2" style="display:block">
                    <!-- <i class="material-icons">place</i> -->
                    <v-icon class="portfolio--text pa-1 left ml-2 heading">place</v-icon>
                    <span class="portfolio--text pa-1 left heading text-uppercase">Location:</span>
                    <span class="white--text pa-1 left heading">Nigeria</span>
                  </span>
                </v-flex>
                <v-flex xs12>
                  <span class="mt-4" style="display:block">
                    <!-- <i class="material-icons">place</i> -->
                    <v-icon class="portfolio--text pa-1 left ml-2 heading">email</v-icon>
                    <span class="portfolio--text pa-1 left heading text-uppercase">Email:</span>
                    <span class="white--text pa-1 left heading">Ekwughaandrew@gmail.com</span>
                  </span>
                </v-flex>
                <v-flex xs12>
                  <span class="mt-4" style="display:block">
                    <!-- <i class="material-icons">place</i> -->
                    <v-icon class="portfolio--text pa-1 left ml-2 heading">phone</v-icon>
                    <span class="portfolio--text pa-1 left heading text-uppercase">Phone:</span>
                    <span class="white--text pa-1 left heading">+2347067859271</span>
                  </span>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
          <p></p>
        </v-container>
      </section>
      <section id="skills">
        <v-container>
          <span class="text-uppercase headline portfolio--text">My Skill Sets</span>

          <v-timeline :dense="breakpoint">
            <v-timeline-item v-for="(skill,i) in skills" :key="i" color="portfolio" small>
              <!-- <template v-slot:opposite>
                <span>Tus eu perfecto</span>
              </template>-->
              <v-card class="elevation-2">
                <v-card-title class="headline">{{skill}}</v-card-title>
              </v-card>
            </v-timeline-item>
          </v-timeline>

          <v-card class="elevation-2">
            <v-card-title class="headline">Resume</v-card-title>
            <v-card-title class="headline">
              <div>
                <a :href="require('@/assets/img/me2.jpg')" target="_blank">resume</a>
                <a :href="require('@/assets/pdfs/CV.pdf')" target="_blank">resume</a>
              </div>
              <div>
                <v-btn @click="download">Download</v-btn>
              </div>
            </v-card-title>
          </v-card>
        </v-container>
      </section>
      <section id="education">
        <v-container>
          <h1>Education</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique temporibus in quidem magnam. Vero dolores, commodi ratione quae dolorum impedit explicabo enim quis magni accusantium est omnis exercitationem voluptates. Iure?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia laudantium enim, similique sapiente expedita veniam numquam pariatur, doloribus blanditiis quo, alias quasi at dolorum fugit sit debitis molestias officiis illum?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora assumenda impedit iure est nulla, numquam veniam incidunt labore animi sint, tempore dolore asperiores optio enim distinctio rem reprehenderit deserunt! At!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, iusto? Tenetur quidem eum odit atque in repellendus voluptatem tempore, nostrum blanditiis id quis! Adipisci excepturi tempore pariatur, porro alias nulla!
          </p>
        </v-container>
      </section>
      <section id="contact">
        <v-container>
          <h1>Contact</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique temporibus in quidem magnam. Vero dolores, commodi ratione quae dolorum impedit explicabo enim quis magni accusantium est omnis exercitationem voluptates. Iure?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia laudantium enim, similique sapiente expedita veniam numquam pariatur, doloribus blanditiis quo, alias quasi at dolorum fugit sit debitis molestias officiis illum?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora assumenda impedit iure est nulla, numquam veniam incidunt labore animi sint, tempore dolore asperiores optio enim distinctio rem reprehenderit deserunt! At!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, iusto? Tenetur quidem eum odit atque in repellendus voluptatem tempore, nostrum blanditiis id quis! Adipisci excepturi tempore pariatur, porro alias nulla!
          </p>
        </v-container>
      </section>
    </div>
  </div>
</template>
<script>
import pdf from "vue-pdf";
export default {
  components: {
    pdf
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
        "Good knowledge of version control systems such as Git etc"
      ],
      file: "require('@/assets/pdfs/CV.pdf')"
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
    }
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
  padding: 5px;
  margin-right: 10px;
  cursor: pointer;
}
.fab:hover {
  background: gray;
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
</style>
