<template>
  <div class="card">
    <MasterSideNav/>
    <div class="slaveSidebar">
      <Showcase/>
      <AboutMe :aboutMe="aboutMe"/>
      <Skills/>
      <Education/>
      <PreviousJobs/>
      <ContactHireMe :aboutMe="aboutMe"/>
      <BottomImage/>
    </div>
  </div>
</template>
<script>
import MasterSideNav from "@/components/portfolio/MasterSideNav";
import AboutMe from "@/components/portfolio/AboutMe";
import Showcase from "@/components/portfolio/Showcase";
import Skills from "@/components/portfolio/Skills";
import Education from "@/components/portfolio/Education";
import ContactHireMe from "@/components/portfolio/ContactHireMe";
import BottomImage from "@/components/portfolio/BottomImage";
import PreviousJobs from "@/components/portfolio/PreviousJobs";
export default {
  components: {
    MasterSideNav,
    AboutMe,
    Showcase,
    Skills,
    Education,
    ContactHireMe,
    BottomImage,
    PreviousJobs
  },
  async asyncData() {
    let data = await import("@/data/pages/about-me.md");
    return { aboutMe: data.attributes };
  },
  data() {
    return {
      title: "Andrew Ekwugha | JavaScript Developer"
    };
  },
  computed: {},

  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "A software developer"
        },
        { hid: "author", name: "author", content: "Andrew Ekwugha" },
        {
          hid: "keywords",
          name: "keywords",
          content: this.aboutMe.keywords
        }
      ]
    };
  }
};
</script>

<style >
.card {
  background: #212121;
  margin: 0px !important;
}
span.display-2 {
  display: block;
}
.about {
  align-content: center;
  text-align: center;
}
.triple-s {
  display: none;
}
.master-sidebar {
  background: #000;
  height: 100%; /* Full-height: remove this if you want "auto" height */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #111; /* Black */
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 20px;
  width: 400px;
  overflow-y: auto;
}

.slaveSidebar {
  margin-left: 400px;
}
.work {
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  text-transform: capitalize;
}
.fab {
  color: white;
  font-size: 25px;
  padding: 15px;
  margin-right: 5px;
}
.fab:hover {
  background: #424242;
}

#icons {
  align-items: flex-start;
  align-content: center;
  text-align: center;
  margin-bottom: 10px;
  margin-top: 20px;
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
.hire-me {
  background: #424242;
  width: 100%;
  color: #fff;
  text-align: justify;
}

@media screen and (max-width: 955px) {
  .master-sidebar {
    display: none;
  }
  .slaveSidebar {
    margin-left: 0px;
  }
  .triple-s {
    display: block;
  }
  #profession {
    margin-top: 300px !important;
  }
}
@media screen and (max-width: 480px) {
  .headline-2 {
    font-size: 18px !important;
  }
}
.headline {
  line-height: 1.5 !important;
  font-family: "Times New Roman", Times, serif;
}
.headline-2 {
  line-height: 1.5 !important;
  font-family: "Times New Roman", Times, serif;
  font-size: 19px;
}
</style>
