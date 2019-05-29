<template>
  <v-card class="blog" dark>
    <v-container>
      <div v-if="posts.length>0">
        <v-layout row wrap>
          <v-flex xs12 sm7>
            <v-layout column id="top">
              <v-flex xs12 class="headline white--text text-capitalize article-title">Blog posts</v-flex>
              <v-flex xs12 v-for="(post,i) in paginatedPosts" :key="i" class="mr-3 hidden-xs-only">
                <post-preview :post="post.attributes"></post-preview>
              </v-flex>
              <v-flex xs12 v-for="post in paginatedPosts" :key="post.slug" class="hidden-sm-and-up">
                <post-preview :post="post.attributes"></post-preview>
              </v-flex>
            </v-layout>
            <div class="text-xs-center">
              <v-layout justify-center>
                <v-flex xs12>
                  <v-card flat>
                    <v-card-text>
                      <v-pagination v-model="pageNumber" :length="pageCount" color="background"></v-pagination>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </div>
          </v-flex>
          <v-flex sm5 class="hidden-xs-only mt-4">
            <Categories/>
          </v-flex>
        </v-layout>
        <v-layout column>
          <v-flex xs12 class="hidden-sm-and-up mt-1">
            <Categories/>
          </v-flex>
        </v-layout>
      </div>
      <div v-else>
        <p class="headline">There are no posts</p>
      </div>
    </v-container>
  </v-card>
</template>
<script>
import PostPreview from "@/components/blog/PostPreview";
import Categories from "@/components/blog/Categories";
import manifest from "../../manifest.json";
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
  async asyncData({ query }) {
    let pageNumber = +query.page || 1;
    let posts = [];

    function getTime(date) {
      let time = new Date(date);
      return time.getTime();
    }

    if (manifest.length > 0) {
      for (let i = 0; i < manifest.length; i++) {
        let url = manifest[i].url;
        let post = await import(`@/content/${url}`);
        posts.push(post);
      }

      posts.sort((firstPost, secondPost) => {
        return (
          getTime(firstPost.attributes.date) -
          getTime(secondPost.attributes.date)
        );
      });
      return { pageNumber, posts };
    } else {
      return { pageNumber, posts };
    }
  },
  created() {},
  watch: {
    pageNumber(newValue) {
      this.$router.push({ path: "/blog", query: { page: newValue } });
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
  head() {
    return {
      title: "Blog posts",
      meta: [{ hid: "description", name: "description", content: "blog posts" }]
    };
  }
};
</script>

<style lang='scss' >
$colorBg: #040028;
$colorFg: #ffffff;
$color: #080818;

html {
  font-size: 16px;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  background: $colorBg;
}
body {
  margin: 0;
  background: $colorBg !important;
  color: $colorFg;
  font-size: 20px;
  line-height: 1.5em;
  padding: 0px;
}
.blog {
  background: #08083d !important;
}
</style>
