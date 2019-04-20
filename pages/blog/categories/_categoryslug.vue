<template>
  <v-card class="blog">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <v-layout column>
            <v-flex xs12 class="headline white--text text-capitalize article-title">
              <span style="cursor:pointer" @click="previous">
                <v-icon color="portfolio" class="heading font-weight-bold" left>arrow_back</v-icon>
              </span>
              {{$route.params.categoryslug}}
            </v-flex>
            <v-flex xs12 v-for="(post,i) in paginatedPosts" :key="i">
              <post-preview :post="post.attributes"></post-preview>
            </v-flex>
          </v-layout>
          <div class="text-xs-center">
            <v-layout justify-center>
              <v-flex xs12>
                <v-card flat dark>
                  <v-card-text>
                    <v-pagination v-model="pageNumber" :length="pageCount" color="background"></v-pagination>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>
<script>
import PostPreview from "@/components/blog/PostPreview";
import Categories from "@/components/blog/Categories";
import manifest from "@/manifest";

export default {
  watchQuery: ["page"],
  components: {
    PostPreview,
    Categories
  },
  data() {
    return {
      size: 2
    };
  },
  async asyncData({ params, query }) {
    let pageNumber = +query.page || 1;
    let posts = [];

    function getTime(date) {
      let time = new Date(date);
      return time.getTime();
    }

    for (let i = 0; i < manifest.length; i++) {
      console.log(params.categoryslug);
      if (manifest[i].category === params.categoryslug) {
        let url = manifest[i].url;
        let post = await import(`@/content/${url}`);
        posts.push(post);
      }
    }
    posts.sort((firstPost, secondPost) => {
      return (
        getTime(firstPost.attributes.date) - getTime(secondPost.attributes.date)
      );
    });
    return { posts, pageNumber };
  },
  watch: {
    pageNumber(newValue) {
      this.$router.push({
        path: `/blog/categories/${this.$route.params.categoryslug}`,
        query: { page: newValue }
      });
    }
  },
  computed: {
    pageCount() {
      let listSize = this.posts.length;
      let size = this.size;
      return Math.ceil(listSize / size);
    },
    paginatedPosts() {
      if (this.pageNumber === 1) {
        return this.posts.slice(0, this.size);
      }
      let start = (this.pageNumber - 1) * this.size;

      let end = start + this.size;
      return this.posts.slice(start, end);
    }
  },
  methods: {
    previous() {
      this.$router.push("/blog");
    }
  },
  head() {
    return {
      title: `Blog posts on ${this.$route.params.categoryslug}`
    };
  },
  mounted() {
    console.log(this.$route);
  }
};
</script>
<style scoped>
</style>
