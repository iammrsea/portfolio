<template>
  <section id="jobs">
    <v-container>
      <v-card dark class="card">
        <v-card-title
          primary-title
          class="display-1 portfolio--text text-xs-center pa-2 mb-2"
        >List of my previous jobs. Click on any image to check out the app</v-card-title>
        <v-card-text>
          <v-carousel hide-controls dark>
            <v-carousel-item
              v-for="(image,i) in images"
              :key="i"
              :src="image.src"
              @click="visit(image.link)"
              style="cursor:pointer"
            >
              <div class="des pa-2 headline">{{image.description}}</div>
            </v-carousel-item>
          </v-carousel>
        </v-card-text>
      </v-card>
    </v-container>
  </section>
</template>
<script>
export default {
  computed: {
    images() {
      let images = [
        {
          src: "/photos/converter.jpg",
          description:
            "An awesome web app which translates figures to words up to quintillion with voice note. It also converts numbers from base two to thirty-six",
          link: `https://mrseaonline.com.ng/translator`
        },
        {
          src: "/photos/cbt.jpg",
          description:
            "A great computer-based-test web app to help young Nigerian students preparing to take Unified Tertiary Matriculation Examination (UTME)",
          link: `https://mrseaonline.com.ng/cbt`
        },
        {
          src: "/photos/ecommerce.jpg",
          description: "An awesome E-commerce site with $0 hosting fee",
          link: "https://e-commerceapp.netlify.com/"
        }
      ];
      return images;
    }
  },
  methods: {
    visit(link) {
      if (window) {
        window.open(link, "_blank");
      }
    }
  }
};
</script>
<style scoped>
.des {
  margin-top: 350px;
  background: #212121;
}
@media screen and (max-width: 802px) {
  .des {
    margin-top: 300px;
  }
}
@media screen and (max-width: 554px) {
  .des {
    margin-top: 280px;
  }
}
@media screen and (max-width: 449px) {
  .des {
    margin-top: 270px;
  }
}
@media screen and (max-width: 440px) {
  .des {
    margin-top: 250px;
  }
}
</style>
