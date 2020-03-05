<template>
  <div>
    <my-aheader></my-aheader>
    <main>
      <div class="container">
        <h1>Room</h1>
      </div>
    </main>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import AdminHeader from "./AdminHeader.vue";
  import MyFooter from "./Footer.vue";
  import Parallax from "vue-parallaxy";
  import {db} from "../main.js";
  import {VueTelInput} from "vue-tel-input";
  import firebase from "firebase";

  export default {
    name: 'room',
    data() {
      return {}
    },
    components: {'my-aheader': AdminHeader, MyFooter, Parallax, VueTelInput}
  }
</script>
