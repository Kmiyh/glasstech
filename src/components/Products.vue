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
import { productsRef } from '../firebase';
export default {
  name: "Products",
  firebase: {
    products: productsRef
  },
  data() {
    return {};
  },
  components: { MyHeader, MyFooter }
};
</script>