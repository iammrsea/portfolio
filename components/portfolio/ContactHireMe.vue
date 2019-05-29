<template>
  <section id="contact">
    <v-container>
      <span class="text-uppercase headline portfolio--text">Hire Me</span>
      <v-card class="hire-me" flat>
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
</template>
<script>
export default {
  props: {
    aboutMe: ""
  }
};
</script>
