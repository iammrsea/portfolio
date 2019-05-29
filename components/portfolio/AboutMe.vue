<template>
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
</template>
<script>
export default {
  props: {
    aboutMe: ""
  }
};
</script>
