<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <h1 class="navbar-brand">
        <a class="navbar-brand" v-scroll-to="'#first'">{{sitename}}</a>
      </h1>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"/>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <button class="sr btn btn-primary btn-md" v-on:click="logout">ВЫЙТИ</button>
      </div>

    </div>
  </nav>
</template>

<script>
  import firebase from "firebase";

  export default {
    name: "my-aheader",
    data() {
      return {
        sitename: "GlassTech"
      };
    },
    methods: {
      logout() {
        firebase
          .auth()
          .signOut()
          .then(() => {
            this.$router.replace("/");
          });
      },
    },
  };
</script>
<style scoped>
  @import url("https://fonts.googleapis.com/css?family=Montserrat:300|Poiret+One|Roboto&display=swap");

  .container {
    padding-left: 0px;
    padding-right: 0px;
  }

  .sr {
    margin-bottom: 5px;
    margin-left: auto;
  }

  button {
    font-family: "Montserrat", sans-serif;
  }

  a {
    text-decoration: none;
  }

  nav {
    position: sticky;
    top: 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    z-index: 100;
  }

  .sr {
    margin-bottom: 5px;
  }

  .sl {
    margin-left: 5px;
    margin-right: 5px;
  }

  .navbar-brand {
    font-size: 40px;
    color: #3b5998;
    /* padding-bottom: 7px !important; */
    font-weight: bold;
  }

  a {
    color: #3b5998 !important;
    padding-bottom: 0px !important;
    font-size: 24px;
    font-family: "Montserrat", sans-serif;
  }

  a:hover {
    color: #f1890b !important;
    cursor: pointer;
  }

  li {
    padding-bottom: 0px;
  }

  .btn-primary {
    background: #5a7ce2;
    background: -moz-linear-gradient(
      -45deg,
      #5a7ce2 0%,
      #8283e8 50%,
      #5c5de8 51%,
      #565bd8 71%,
      #575cdb 100%
    );
    background: -webkit-linear-gradient(
      -45deg,
      #5a7ce2 0%,
      #8283e8 50%,
      #5c5de8 51%,
      #565bd8 71%,
      #575cdb 100%
    );
    background: linear-gradient(
      135deg,
      #5a7ce2 0%,
      #8283e8 50%,
      #5c5de8 51%,
      #565bd8 71%,
      #575cdb 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#5a7ce2', endColorstr='#575cdb', GradientType=1);
    background-size: 400% 400%;
    -webkit-animation: AnimationName 3s ease infinite;
    -moz-animation: AnimationName 3s ease infinite;
    animation: AnimationName 3s ease infinite;
    -webkit-animation: AnimationName 3s ease infinite;
    -moz-animation: AnimationName 3s ease infinite;
    animation: AnimationName 3s ease infinite;
    border: medium none;
  }

  .btn-outline-primary:hover {
    background-color: #5a7ce2;
    border-color: #5a7ce2;
    color: #fff;
  }

  @-webkit-keyframes AnimationName {
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

  @-moz-keyframes AnimationName {
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

  .btn-outline-light:hover {
    color: #3f345f;
  }

  .btn-outline-warning:hover {
    color: #ffffff;
  }

  .btn-sm {
    font-size: 12px;
    padding: 11px 25px;
  }

  .elements-page-btn .btn {
    margin: 6px 3px;
  }
</style>
