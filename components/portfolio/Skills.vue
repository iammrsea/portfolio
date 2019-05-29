<template>
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
</template>
<script>
export default {
  data() {
    return {
      skills: [
        "Excellent understanding of object-oriented programming",
        "Excellent grasp of core concepts of Java and Android",
        "Excellent knowledge of object-oriented JavaScript",
        "Excellent understanding of NodeJs, ExpressJs and MongoDb",
        "VueJs/NuxtJs, Vuetify, CSS, SASS, HTML 5, and Bootstrap 4",
        "JavaScript full-stack development",
        "Good knowledge of version control systems such as Git and github etc",
        "Excellent understanding of bundlers such as webpack"
      ]
    };
  },
  computed: {
    breakpoint() {
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
