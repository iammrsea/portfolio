<template>
  <v-card class="my-2 mr-3" raised>
    <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{post.title}}</h3>
        <h4>Written by {{post.author}}</h4>
        <p>Date {{post.date}}</p>
        <div>
          <p>{{post.description}}</p>
        </div>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn flat color="primary" @click="postDetail">Explore...</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    postDetail() {
      if (this.$route.path.split("/").length === 3) {
        // console.log(`${this.$route.path}/${this.post.slug}`);
        this.$router.push(`${this.$route.path}/${this.post.slug}`);
      } else {
        this.$router.push(`/blog/${this.post.slug}`);
      }

      // this.$router.push(`${this.$route.path}/${this.post.slug}`);
    }
  }
};
</script>
