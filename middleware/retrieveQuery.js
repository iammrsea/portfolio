import Vue from "vue";
export default function({ from }) {
  Vue.prototype.$myQuery = from.query;
  Vue.prototype.$myPath = from.fullPath;
}
