<template>
  <div>
    <my-header></my-header>
    <main></main>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from "./Header.vue";
import MyFooter from "./Footer.vue";
import { db } from "../main.js";
export default {
  name: "News",
  data() {
    return {};
  },
  components: { MyHeader, MyFooter }
};
</script>