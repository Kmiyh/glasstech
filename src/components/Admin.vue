<template>
  <div>
    <my-header></my-header>
    <main>
      <div class="container">
        <h1>Панель администратора</h1>
        <button class="sr btn btn-primary btn-md" v-on:click="logout">Выйти</button>

        <div class="row rw">
          <div class="card col-md-5">
            <form>
              <h5>Обновить заказ</h5>
              <div class="form-row">
                <div class="form-group col-md-12">
                  <label for="code">Номер заказа</label>
                  <input v-model="code" type="text" class="form-control" id="code"/>
                  <label for="status">Выберете статус</label>
                  <select v-model="status" id="status" class="form-control">
                    <option>В обработке</option>
                    <option>Изготавливается</option>
                    <option>Упаковывается</option>
                    <option>Передан доставщику</option>
                    <option>Доставляется</option>
                    <option>В пункте выдачи</option>
                    <option>Закрыт</option>
                  </select>
                </div>
              </div>
              <button
                v-on:click.prevent="searchOrder(code, status)"
                type="submit"
                class="btn btn-primary order btn btn-warning btn-md"
              >Обновить
              </button>
            </form>
          </div>
        </div>

        <div class="row">
          <div class="card col-md-5">
            <form>
              <h5>Добавить город</h5>
              <div class="form-row">
                <div class="form-group col-md-12">
                  <label for="inputName">Название</label>
                  <input v-model="name_t" type="text" class="form-control" id="inputName"/>
                </div>
              </div>
              <button
                id="do"
                v-on:click.prevent="addTown(name_t)"
                type="submit"
                class="btn btn-primary order btn btn-warning btn-md"
              >Добавить
              </button>
            </form>
          </div>
          <div class="card col-md-5">
            <form>
              <h5>Добавить тему</h5>
              <div class="form-row">
                <div class="form-group col-md-12">
                  <label for="inputName">Название</label>
                  <input v-model="name_tm" type="text" class="form-control"/>
                </div>
              </div>
              <button
                v-on:click.prevent="addTheme(name_tm)"
                type="submit"
                class="btn btn-primary order btn btn-warning btn-md"
              >Добавить
              </button>
            </form>
          </div>
        </div>
        <div class="row rw">
          <div class="col-md-5 cdl">
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
                <button
                  v-on:click="deleteTown(town.id)"
                  type="submit"
                  class="btn btn-primary order btn btn-warning btn-md lbt col-md-4 lbt"
                >Удалить
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-5 cdl">
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
                <button
                  v-on:click="deleteTheme(theme.id)"
                  type="submit"
                  class="btn btn-primary order btn btn-warning btn-md col-md-4 lbt"
                >Удалить
                </button>
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
    name: "my-admin",
    data() {
      return {
        status: "",
        code: "",
        iden: "",
        flag_o: false,
        flag_m: false,
        flag_t: false,
        flag_tm: false,
        name_t: "",
        name_tm: "",
        name_td: "",
        name_th: "",
        plus: "",
        towns: [],
        themes: [],
        th: [],
        ord: [],
      };
    },
    firestore() {
      return {
        towns: db.collection("towns").orderBy("name"),
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
      searchOrder(code, status) {
        db.collection('orders').doc(code).set({
          status: status,
        }, {merge: true});
        this.code = "";
        this.status = "";
      },
      deleteTheme(id) {
        db.collection('themes').doc(id).delete();
      },
      deleteTown(id) {
        db.collection('towns').doc(id).delete();
      },
      addTown(name) {
        db.collection("towns").add({name});
        this.name_t = "";
      },
      addTheme(name) {
        db.collection("themes").add({name});
        this.name_tm = "";
      }
    },
    components: {MyHeader, MyFooter}
  };
</script>

<style scoped>
  .lbt {
      margin: auto;
  }

  .cdl {
    margin: 5px auto;
  }

  .sr {
    margin-top: 5px;
    margin-bottom: 5px;
  }

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
    margin: auto;
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
