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
Vue.use(VueTelInput);
Vue.use(firestorePlugin);
firebase.initializeApp({
  apiKey: "AIzaSyDa7rwmud3JhtjEx8gIaJ9utX40twzlg_A",
  authDomain: "testglass-89c71.firebaseapp.com",
  databaseURL: "https://testglass-89c71.firebaseio.com",
  projectId: "testglass-89c71",
  storageBucket: "testglass-89c71.appspot.com",
  messagingSenderId: "687374579209",
  appId: "1:687374579209:web:5847781a3a56b98c7f6ad8",
  measurementId: "G-9Z24BKFL14"
});
export const db = firebase.firestore();
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
