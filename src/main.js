// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import VueScrollReveal from "vue-scroll-reveal";
require("./assets/app.css");
import firebase from 'firebase/app';
import 'firebase/firestore'
import './firebase';
import {
  firestorePlugin
} from 'vuefire'

Vue.use(VueScrollReveal);
Vue.use(firestorePlugin);
firebase.initializeApp({
  apiKey: "AIzaSyBCujIkPsUMXrywaiAgU9JEzAj4XtaqFZo",
  authDomain: "glasstech-34465.firebaseapp.com",
  databaseURL: "https://glasstech-34465.firebaseio.com",
  projectId: "glasstech-34465",
  storageBucket: "glasstech-34465.appspot.com",
  messagingSenderId: "415886050787",
  appId: "1:415886050787:web:7196c393c488bb810b8cd6",
  measurementId: "G-XJ63M6SKK5"
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
