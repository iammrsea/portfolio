<template>
  <section id="intro">
    <v-img
      :src="require('@/assets/img/wall2.jpg')"
      style="box-sizing:border-box"
      height="600"
      id="wall"
    >
      <div class="portfolio--text headline text-xs-left triple-s">
        <nuxt-link to="/" tag="span" style="cursor:pointer; display:block" class="pa-1">
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
</template>
