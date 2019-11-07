import Vue from "vue";
import Router from "vue-router";
import Main from "@/components/Main";
import Admin from "@/components/Admin"
import VueScrollTo from "vue-scrollto";
import firebase from 'firebase'

Vue.use(Router);
Vue.use(VueScrollTo, {
  offset: -120
});

const router = new Router({
  mode: "history",
  routes: [{
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
    }
  ]
});

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('/')
  else if (!requiresAuth && currentUser) next('/admin')
  else next()
})
export default router
