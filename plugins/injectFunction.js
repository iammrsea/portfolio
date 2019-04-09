import Vue from "vue";

Vue.prototype.$injectedFunction = () => {
  console.log("This is my injected funtion/plugin");
};
