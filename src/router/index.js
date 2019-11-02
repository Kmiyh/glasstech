import Vue from "vue";
import Router from "vue-router";
import Main from "@/components/Main";
import News from "@/components/News";
import VueScrollTo from "vue-scrollto";

Vue.use(Router);
Vue.use(VueScrollTo, {
  offset: -120
});

export default new Router({
  mode: "history",
  routes: [{
      path: "/",
      name: "iMain",
      component: Main,
      props: true
    },
    {
      path: "/news",
      name: "News",
      component: News,
      props: true
    }
  ]
});
