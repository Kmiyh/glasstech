<template>
  <div>
    <my-header></my-header>
    <main>
      <div class="container">
        <h1>Наши продукты</h1>
        <div class="container">
          <div class="row centered">
            <div v-for="glass in glasses" class="cd">
              <div class="image_glass">
                <img v-bind:src=glass.picture>
                <div>
                  <button
                    class="order btn order_cd btn-warning btn-lg"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                    @click="glass = glass.name"
                  >
                    {{glass.name}}
                    <h6>от {{glass.price}} руб.</h6>
                  </button>
                </div>
                <div
                  class="text"
                >{{glass.description}}
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
  import {db} from "../main.js";
  import firebase from "firebase";

  export default {
    name: "prods",
    data() {
      return {
        glasses: [],
      }
    },
    firestore() {
      return {
        glasses: db.collection("glasses").orderBy("name"),
      };
    },
    components: {MyHeader, MyFooter},
  }
</script>

<style scoped>
  h1 {
    font-family: "Roboto", sans-serif;
    font-size: 48px;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  .text {
    padding-right: 5px;
    padding-left: 5px;
    padding-bottom: 20px;
    border: 2px;
    font-family: "Montserrat", sans-serif;
    text-align: center;
  }

  .cd {
    max-width: 298px;
    max-height: 520px;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .order {
    text-align: center;
    margin-top: 10px;
    margin-bottom: 20px;
    /* max-width: 298px; */
    /* padding-right: 0px;
    padding-left: 0px;
    padding-bottom: 0px;
    padding-top: 0px; */
  }

  .order_cd {
    padding-bottom: 0px;
    padding-top: 0px;
    min-width: 300px;
    margin-top: 0px !important;
    margin-bottom: 10px !important;
    border-radius: 0em !important;
  }

  .btn-warning {
    background: #e5ae09;
    background: -moz-linear-gradient(
      -45deg,
      #e5ae09 0%,
      #ffd044 50%,
      #ffc107 51%,
      #fc9014 71%,
      #f1890b 100%
    );
    background: -webkit-linear-gradient(
      -45deg,
      #e5ae09 0%,
      #ffd044 50%,
      #ffc107 51%,
      #fc9014 71%,
      #f1890b 100%
    );
    background: linear-gradient(
      135deg,
      #e5ae09 0%,
      #ffd044 50%,
      #ffc107 51%,
      #fc9014 71%,
      #f1890b 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#e5ae09', endColorstr='#f1890b', GradientType=1);

    background-size: 400% 400%;
    -webkit-animation: AnimationName 3s ease infinite;
    -moz-animation: AnimationName 3s ease infinite;
    animation: AnimationName 3s ease infinite;
    -webkit-animation: AnimationName 3s ease infinite;
    -moz-animation: AnimationName 3s ease infinite;
    animation: AnimationName 3s ease infinite;
    border: medium none;
    color: #fff !important;
  }

  @keyframes AnimationName {
    0% {
      background-position: 0% 31%;
    }
    50% {
      background-position: 100% 70%;
    }
    100% {
      background-position: 0% 31%;
    }
  }

</style>
