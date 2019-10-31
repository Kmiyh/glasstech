<template>
  <div>
    <my-header></my-header>
    <main>
      <div class="container">
        <div class="row">
          <div class="inf" v-for="product in products">
            <div class="card">
              <div class="row">
                <div>
                  <figure>
                    <img :src="product.image" />
                  </figure>
                </div>
                <div class="title">
                  <h3>{{product.title}}</h3>
                  <p>{{product.description}}</p>
                </div>
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
@import url("https://fonts.googleapis.com/css?family=Montserrat:300|Poiret+One|Roboto&display=swap");
.inf {
  margin: auto;
}
.title {
  padding-top: 10px;
  padding-right: 30px;
  padding-left: 30px;
  font-family: "Roboto", sans-serif;
}
.card {
  margin-top: 10px;
  margin-bottom: 10px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.5);
  max-width: 550px;
}
figure {
  margin: 5px 5px 5px 5px;
}
</style>