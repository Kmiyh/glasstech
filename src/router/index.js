import Vue from "vue";
import Router from "vue-router";
import Main from "@/components/Main";
import Products from "@/components/Products";
import News from "@/components/News";
import Contacts from "@/components/Contacts";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [{
      path: "/",
      name: "iMain",
      component: Main,
      props: true
    },
    {
      path: "/products",
      name: "Products",
      component: Products,
      props: true
    },
    {
      path: "/news",
      name: "News",
      component: News,
      props: true
    },
    {
      path: "/contacts",
      name: "Contacts",
      component: Contacts,
      props: true
    }
  ]
});
