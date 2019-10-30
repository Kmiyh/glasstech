<template>
  <div>
    <my-header></my-header>
    <main>
      <div v-for="product in products">
        <div class="container">
          <div class="card">
            <div class="row">
              <div class="col-md-5 col-md-offset-0">
                <figure>
                  <img :src="product.image" />
                </figure>
              </div>
            </div>
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

<style>
.card {
  margin-top: 10px;
  margin-bottom: 10px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.5);
}
figure {
  margin: 5px 5px 5px 5px;
}
</style>