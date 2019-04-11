<template>
  <v-img :src="imageSource"></v-img>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    height: Number,
    width: Number
  },
  computed: {
    imageSource() {
      return require(`@/assets/img/${this.name}`);
    }
  }
};
</script>
