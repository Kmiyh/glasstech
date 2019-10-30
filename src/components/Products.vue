<template>
  <div>
    <my-header></my-header>
    <main>
      <div v-for="product in products">
        <div class="row">
          <div class="col-md-5 col-md-offset-0">
            <figure>
              <img :src="product.image" />
            </figure>
          </div>
        </div>
      </div>
    </main>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from "./Header.vue";
import MyFooter from "./Footer.vue";
import { db } from "../main.js";
export default {
  name: "Products",
  data() {
    return {
      products: []
    };
  },
  firestore() {
    return {
      products: db.collection("products").orderBy("title")
    };
  },
  components: { MyHeader, MyFooter }
};
</script>