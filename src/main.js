// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import VueScrollReveal from "vue-scroll-reveal";
import VueTelInput from 'vue-tel-input'
require("./assets/app.css");
import firebase from 'firebase/app';
import 'firebase/firestore'
import './firebase';
import {
  firestorePlugin
} from 'vuefire'

Vue.use(VueScrollReveal);
Vue.use(VueTelInput)
Vue.use(firestorePlugin);
firebase.initializeApp({
  apiKey: "AIzaSyAvlZ21px091cKs-WElvDIZOfRRB824fd8",
  authDomain: "glass-6d5f0.firebaseapp.com",
  databaseURL: "https://glass-6d5f0.firebaseio.com",
  projectId: "glass-6d5f0",
  storageBucket: "glass-6d5f0.appspot.com",
  messagingSenderId: "46067386764",
  appId: "1:46067386764:web:c7bbcaeecd0b123f982ea9"
})
export const db = firebase.firestore()
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: {
    App
  },
  template: "<App/>"
});
