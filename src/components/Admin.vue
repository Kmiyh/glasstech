<template>
  <div>
    <my-header></my-header>
    <main>
      <div class="container">
        <h1>Панель администратора</h1>
        <button class="sr btn btn-primary btn-md" v-on:click="logout">Выйти</button>
        <div class="row">
          <div class="card col-md-12">
            <form>
              <h5>Добавить модель телефона</h5>
              <div class="form-row">
                <div class="form-group col-md-12">
                  <label for="inputName">Название</label>
                  <input v-model="name_m" type="text" class="form-control" id="inputName" />
                </div>
                <div class="form-group col-md-12">
                  <label for="inputPlus">Надбавку</label>
                  <input v-model="plus" type="number" class="form-control" id="inputPlus" />
                </div>
              </div>
              <button
                id="do"
                v-on:click="addModel(name_m, plus)"
                type="submit"
                class="btn btn-primary order btn btn-warning btn-md"
              >Добавить</button>
            </form>
          </div>
        </div>
        <div class="row">
          <div class="card col-md-12">
            <form>
              <h5>Добавить город</h5>
              <div class="form-row">
                <div class="form-group col-md-12">
                  <label for="inputName">Название</label>
                  <input v-model="name_t" type="text" class="form-control" id="inputName" />
                </div>
              </div>
              <button
                id="do"
                v-on:click="addTown(name_t)"
                type="submit"
                class="btn btn-primary order btn btn-warning btn-md"
              >Добавить</button>
            </form>
          </div>
        </div>
        <div class="row">
          <div class="card col-md-12">
            <form>
              <h5>Добавить тему</h5>
              <div class="form-row">
                <div class="form-group col-md-12">
                  <label for="inputName">Название</label>
                  <input v-model="name_tm" type="text" class="form-control" id="inputName" />
                </div>
              </div>
              <button
                id="do"
                v-on:click="addTheme(name_tm)"
                type="submit"
                class="btn btn-primary order btn btn-warning btn-md"
              >Добавить</button>
            </form>
          </div>
        </div>
        <div class="row rw">
          <div class="col-md-4">
            <div>
              <button
                @click="flag_m = flag_m ? false : true;"
                class="sr btn btn-primary btn-sm"
                type="submit"
              >Список моделей</button>
            </div>
            <div v-if="flag_m" v-for="model in models">
              <div class="card cdrw">
                <p>{{model.name}}</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div>
              <button
                @click="flag_t = flag_t ? false : true;"
                class="sr btn btn-primary btn-sm"
                type="submit"
              >Список городов</button>
            </div>
            <div v-if="flag_t" v-for="town in towns">
              <div class="card cdrw">
                <p>{{town.name}}</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div>
              <button
                @click="flag_tm = flag_tm ? false : true;"
                class="sr btn btn-primary btn-sm"
                type="submit"
              >Список тем</button>
            </div>
            <div v-if="flag_tm" v-for="theme in themes">
              <div class="card cdrw">
                <p>{{theme.name}}</p>
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
import firebase from "firebase";
export default {
  name: "my-admin",
  data() {
    return {
      flag_m: false,
      flag_t: false,
      flag_tm: false,
      name_m: "",
      name_t: "",
      name_tm: "",
      plus: "",
      towns: [],
      models: [],
      themes: []
    };
  },
  firestore() {
    return {
      towns: db.collection("towns").orderBy("name"),
      models: db.collection("models").orderBy("name"),
      themes: db.collection("themes").orderBy("name")
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
    addModel(name, plus) {
      db.collection("models").add({ name, plus });
    },
    addTown(name) {
      db.collection("towns").add({ name });
    },
    addTheme(name) {
      db.collection("themes").add({ name });
    }
  },
  components: { MyHeader, MyFooter }
};
</script>

<style scoped>
.rw {
  text-align: center;
  margin-bottom: 20px;
  margin-top: 10px;
}
.information {
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 10px;
}
.card {
  margin-top: 10px;
  margin-bottom: 10px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.5);
}
.btn-warning {
  margin-bottom: 10px;
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
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e5ae09', endColorstr='#f1890b',GradientType=1 );

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
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#5a7ce2', endColorstr='#575cdb',GradientType=1 );
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