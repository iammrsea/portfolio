<template>
  <v-carousel>
    <v-carousel-item v-for="(image,i) in images" :key="i" :src="image"></v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  props: {
    images: {
      type: Array,
      required: true
    }
  }
};
</script>
