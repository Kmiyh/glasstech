import Vue from "vue";
import Router from "vue-router";
import Main from "@/components/Main";
import Admin from "@/components/Admin";
import Products from "@/components/Products";
import Room from "@/components/Room";
import VueScrollTo from "vue-scrollto";
import firebase from "firebase";
import { log } from "util";

Vue.use(Router);
Vue.use(VueScrollTo, {
  offset: -120
});

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "iMain",
      component: Main,
      props: true
    },
    {
      path: "/admin",
      name: "Admin",
      component: Admin,
      meta: {
        requiresAuth: true
      },
      props: true
    },
    {
      path: "/room",
      name: "Room",
      component: Room,
      meta: {
        requiresAuth: true
      },
      props: true
    },
    {
      path: "/products",
      name: "Products",
      component: Products,
      props: true
    }
  ]
});

router.beforeEach((to, from, next) => {
  firebase.auth();
  firebase.auth().onAuthStateChanged(
    user => {
      let currentUser = user;
      let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

      console.log("curUser " + currentUser);
      console.log("reqA " + requiresAuth);

      if (requiresAuth && !currentUser && currentUser.isAnonymous) {
        next("/");
        console.log("not");
      } else if (!requiresAuth && currentUser && currentUser.email === 'pvlgaliguzov@gmail.com') {
        next("/admin");
        console.log(currentUser.email);
      } else if (!requiresAuth && currentUser && currentUser.email !== 'pvlgaliguzov@gmail.com') {
        next('/room');
        console.log(currentUser.email);
      }
      else {
        next();
        console.log("else");
      }
    },
    error => {
      console.log(error);
    }
  );
});
export default router;
