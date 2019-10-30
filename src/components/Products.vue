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
export default {
  name: "Products",
  data() {
    return {};
  },
  components: { MyHeader, MyFooter }
};
</script>