<template>
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
</template>
<script>
export default {
  computed: {
    breakpoint() {
      return !this.$vuetify.breakpoint.smAndUp;
    }
  }
};
</script>
