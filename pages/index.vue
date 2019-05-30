<template>
  <div id="container">
    <Portfolio :aboutMe="aboutMe"/>
  </div>
</template>

<script>
import Portfolio from "@/components/Portfolio";

export default {
  components: {
    Portfolio
  },
  data() {
    return {
      buttonNav: "home",
      title: ""
    };
  },
  async asyncData() {
    let data = await import("@/data/pages/about-me.md");
    return { aboutMe: data.attributes };
  },
  methods: {
    cbt() {
      window.location = `${window.location.href}/cbt`;
    }
  },
  head() {
    return {
      title: "Andrew Ekwugha | JavaScript Developer",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "This is my custom description"
        }
      ]
    };
  }
};
</script>
<style >
#card {
  background: #424242;
  margin-top: -6px;
  z-index: 1;
}

section {
  text-align: center;
  align-content: center;
  width: 100%;
}
p {
  text-align: justify;
}
#profession {
  margin-top: 400px;
}
#intro {
  align-content: center;
  text-align: center;
  color: #fff;
}
#container {
  /* background: #e0e0e0; */
  background: gray;
  margin-top: -70px;
}
.icon {
  display: block !important;
}
.fas {
  font-weight: bolder;
  font-size: 18px;
}
.headline {
  line-height: 1.5 !important;
  font-family: "Times New Roman", Times, serif !important;
}
@media screen and (max-width: 480px) {
  .headline-2 {
    font-size: 18px !important;
  }
}
.headline-2 {
  line-height: 1.5 !important;
  font-family: "Times New Roman", Times, serif !important;
  font-size: 20px;
}
</style>
