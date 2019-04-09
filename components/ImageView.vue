<template>
  <v-img :src="src"></v-img>
</template>
<script>
export default {
  props: {
    src: String,
    height: Number,
    width: Number
  }
};
</script>
