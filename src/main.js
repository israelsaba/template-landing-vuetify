// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vuetify from "vuetify";
import Vue from "vue";
import App from "./App";

// vuetify"s stuff

import("vuetify/dist/vuetify.min.css");

Vue.use(Vuetify);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>",
});
