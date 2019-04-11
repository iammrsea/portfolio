<template>
  <v-container>
    <nuxt-child></nuxt-child>
  </v-container>
</template>
<script>
export default {
  middleware: "blog"
};
</script>

