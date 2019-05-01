<template>
  <v-card class="mt-1 mb-2 font-type" dark>
    <!-- <div v-if="post.thumbnails">
      <carousel-view :images="images"></carousel-view>
    </div>
    <div v-else>
      <v-img :src="image" aspect-ratio="2.75"></v-img>
    </div>-->
    <div v-if="post.thumbnail">
      <v-img :src="post.thumbnail"></v-img>
    </div>

    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0 article-title">{{post.title}}</h3>
        <h4 class="mt-2 portfolio--text">
          <span>Author:</span>
          {{post.author}}
        </h4>
        <p class="portfolio--text">Date: {{post.date | returnDate}}</p>
        <div>
          <p>{{post.summary}}</p>
        </div>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn flat class="background text-capitalize" @click="postDetail">Read More...</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import CarouselView from "@/components/blog/CarouselView";
export default {
  components: {
    CarouselView
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  },
  created() {},
  computed: {
    // images() {
    //   return this.post.thumbnails.split(",").map(name => `img/${name}`);
    // },
    // image() {
    //   //return `img/${this.post.thumbnail}`
    //   return "https://cdn.vuetifyjs.com/images/cards/desert.jpg";
    // }
  },
  methods: {
    postDetail() {
      this.$router.push(
        `/blog/${this.post.title
          .split(" ")
          .join("-")
          .toLowerCase()}`
      );
    }
  },
  filters: {
    returnDate(newDate) {
      if (newDate.split("-").length === 3) {
        let array = new Date(newDate).toString().split(" ");
        let myDate = "";
        let date = "" + array[2];
        let month = array[1];
        let year = array[3];

        if (date.endsWith(1)) {
          myDate += date + "st ";
        } else if (date.endsWith(2)) {
          myDate += date + "nd ";
        } else if (date.endsWith(3)) {
          myDate += date + "rd ";
        } else {
          myDate += date + "th ";
        }
        switch (month) {
          case "Jan": {
            myDate += "January, ";
            break;
          }
          case "Feb": {
            myDate += "February, ";
            break;
          }
          case "Mar": {
            myDate += "March, ";
            break;
          }
          case "Apr": {
            myDate += "April, ";
            break;
          }
          case "May": {
            myDate += "May, ";
            break;
          }
          case "Jun": {
            myDate += "June, ";
            break;
          }
          case "July": {
            myDate += "July, ";
            break;
          }
          case "Aug": {
            myDate += "August, ";
            break;
          }
          case "Sep": {
            myDate += "September, ";
            break;
          }
          case "Oct": {
            myDate += "October, ";
            break;
          }
          case "Nov": {
            myDate += "November, ";
            break;
          }
          case "Dec": {
            myDate += "December, ";
            break;
          }
          default:
            break;
        }
        myDate += year;
        return myDate;
      } else {
        return newDate;
      }
    }
  }
};
</script>
<style lang="scss">
$colorBg: #433a8f;
.article-title {
  position: relative;
  margin: 0;
  padding-bottom: 0.5em;
  font-size: 28px;
  letter-spacing: 0.0175em;
  text-transform: uppercase;
  text-shadow: 3px 3px 0 #433a8f;
}
.font-type {
  font-family: "Times New Roman", Times, serif;
}
</style>
