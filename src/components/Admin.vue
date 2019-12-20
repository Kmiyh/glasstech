<template>
  <div>
    <my-header/>
    <main>
      <div class="container">
        <h1>Панель администратора</h1>
        <button class="sr btn btn-primary btn-md" v-on:click="logout">Выйти</button>

        <div class="row col-md-12 d">
          <div class="card col-md-12">
            <h5>Список заказов</h5>
            <input class="form-control" type="text" id="myInput" placeholder="Поиск" aria-label="Search"
                   v-on:keyup="myFunction()">
            <ul id="myUL">
              <li v-for="order in orders">
                <a href="#" v-on:click="showOrder(order.id)" class="s">{{order.id}}</a>
                <a href="#" class="lia" v-on:click="deleteOrder(order.id)">Удалить</a>
              </li>
            </ul>
          </div>
          <div class="card col-md-12" v-for="order in sh_ord">
            <div class="row col-md-12">
              <h3 style="text-align: center" class="col-md-12">Заказ: {{time_id}}</h3>
              <div class="row col-md-12">
                <div class="col-md-4">
                  <h5>Информация о заказе</h5>
                  Модель телефона: {{order.model}} <br>
                  Размер экрана: {{order.display}} дм.<br>
                  Тип стекла: {{order.glass}} <br>
                  Количество: {{order.count}} шт.<br>
                  Итог заказа: {{order.itog}} руб.<br>
                  Статус: {{order.status}} <br>
                </div>
                <div class="col-md-4">
                  <h5>Контактная информация</h5>
                  Email: {{order.email}} <br>
                  Телефон: {{order.phone}} <br>
                  Город: {{order.town}} <br>
                  Адрес: {{order.address}} <br>
                  Индекс: {{order.index}} <br>
                </div>
                <div class="col-md-4">
                  <form>
                    <h5>Обновить статус</h5>
                    <div class="form-row">
                      <div class="form-group col-md-12">
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
                        <small v-if="!status">Укажите статус</small>
                      </div>
                    </div>
                    <button
                      v-on:click.prevent="updateOrder(time_id, status)"
                      type="submit"
                      class="btn btn-primary order btn btn-warning btn-md"
                    >Обновить
                    </button>
                    <button
                      v-on:click.prevent="deleteOrder(time_id)"
                      type="submit"
                      class="btn btn-primary order btn btn-warning btn-md"
                    >Удалить
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row col-md-12 d">
          <div class="card col-md-12">
            <div class="row">
              <div class="col-md-12">
                <h5>Обратная связь</h5>
                <input class="form-control" type="text" id="myInput4" placeholder="Поиск" aria-label="Search"
                       v-on:keyup="myFunction4()">
                <ul id="myUL4">
                  <li v-for="feed in feedbacks">
                    <b><a href="#" style="pointer-events: none; cursor: default;" class="s">{{feed.theme}} ({{feed.email2}} - {{feed.lastname}} {{feed.firstname}}) - </a></b>
                    <a href="#" style="pointer-events: none; cursor: default;" class="s size">{{feed.text}}</a>
                    <a href="#" class="lia" v-on:click="deleteFeedbacks(feed.id)">Удалить</a>
                    <hr>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="row col-md-12 d">
          <div class="card col-md-12">
            <div class="row">
              <div class="col-md-6">
                <h5>Список городов</h5>
                <input class="form-control" type="text" id="myInput2" placeholder="Поиск" aria-label="Search"
                       v-on:keyup="myFunction2()">
                <ul id="myUL2">
                  <li v-for="town in towns">
                    <a href="#" style="pointer-events: none; cursor: default;" class="s">{{town.name}}</a>
                    <a href="#" class="lia" v-on:click="deleteTown(town.id)">Удалить</a>
                  </li>
                </ul>
              </div>
              <div class="col-md-6">
                <form>
                  <h5>Добавить город</h5>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <input v-model="name_t" type="text" class="form-control" id="inputName"/>
                      <small v-if="!town">Укажите название города</small>
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
            </div>
          </div>
          <div class="card col-md-12">

            <div class="row">
              <div class="col-md-6">
                <h5>Список тем</h5>
                <input class="form-control" type="text" id="myInput3" placeholder="Поиск" aria-label="Search"
                       v-on:keyup="myFunction3()">
                <ul id="myUL3">
                  <li v-for="theme in themes">
                    <a href="#" style="pointer-events: none; cursor: default;" class="s">{{theme.name}}</a>
                    <a href="#" class="lia" v-on:click="deleteTheme(theme.id)">Удалить</a>
                  </li>
                </ul>
              </div>
              <div class="col-md-6">
                <form>
                  <h5>Добавить тему</h5>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <input v-model="name_tm" type="text" class="form-control"/>
                      <small v-if="!theme">Укажите название темы</small>
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
          </div>

        </div>
      </div>
    </main>
    <my-footer/>
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
        del_code: "",
        iden: "",
        show: "",
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
        town: "",
        theme: "",
        orders: [],
        feedbacks: [],
        sh_ord: [],
        time_id: ""
      };
    },
    firestore() {
      return {
        towns: db.collection("towns").orderBy("name"),
        orders: db.collection("orders").orderBy("date"),
        feedbacks: db.collection("feedbacks").orderBy("date"),
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
      myFunction() {
        var input, filter, ul, li, a, i;
        input = document.getElementById('myInput');
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL");
        li = ul.getElementsByTagName('li');

        for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("a")[0];
          if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
          } else {
            li[i].style.display = "none";
          }
        }
      },
      myFunction2() {
        var input, filter, ul, li, a, i;
        input = document.getElementById('myInput2');
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL2");
        li = ul.getElementsByTagName('li');

        for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("a")[0];
          if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
          } else {
            li[i].style.display = "none";
          }
        }
      },
      myFunction3() {
        var input, filter, ul, li, a, i;
        input = document.getElementById('myInput3');
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL3");
        li = ul.getElementsByTagName('li');

        for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("a")[0];
          if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
          } else {
            li[i].style.display = "none";
          }
        }
      },
      myFunction4() {
        var input, filter, ul, li, a, i;
        input = document.getElementById('myInput4');
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL4");
        li = ul.getElementsByTagName('li');

        for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("a")[0];
          if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
          } else {
            li[i].style.display = "none";
          }
        }
      },
      showOrder(id) {
        let showArray = [];
        this.time_id = id;
        db.collection('orders').doc(id)
          .get()
          .then(doc => {
            let sh = doc.data();
            showArray.push(sh);
          });
        this.sh_ord = showArray;
        console.log(this.sh_ord);
      },
      updateOrder(code, status) {
        try {
          db.collection('orders').doc(code)
            .get()
            .then(doc => {
              if (!doc.exists) {
                alert('Такого заказа не существует. Проверьте введенные данные.')
              } else {
                let err_code = code != "";
                if (err_code) {
                  db.collection('orders').doc(code).set({
                    status: status,
                  }, {merge: true});
                }
                this.code = "";
                this.status = "";
                alert('Статус заказа обновлен.')
              }
            })
        } catch (e) {
          alert('Нет такого документа')
        }
      }
      ,
      deleteTheme(id) {
        db.collection('themes').doc(id).delete();
      }
      ,
      deleteTown(id) {
        db.collection('towns').doc(id).delete();
      }
      ,
      deleteFeedbacks(id) {
        db.collection('feedbacks').doc(id).delete();
      }
      ,
      deleteOrder(id) {
        db.collection('orders').doc(id).delete();
      }
      ,
      addTown(name) {
        db.collection('towns').doc(name)
          .get()
          .then(doc => {
            if (doc.exists) {
              alert('Такой город уже существует')
            } else {
              let err_town = name != "";
              if (err_town) {
                db.collection("towns").doc(name).set({name});
              }
              this.name_t = "";
              alert('Город добавлен')
            }
          });
      }
      ,
      addTheme(name) {
        db.collection('themes').doc(name)
          .get()
          .then(doc => {
            if (doc.exists) {
              alert('Такая тема уже существует')
            } else {
              let err_theme = name != "";
              if (err_theme) {
                db.collection("themes").doc(name).set({name});
              }
              this.name_tm = "";
              alert('Тема добавлена')
            }
          });
      }
    },
    components: {
      MyHeader, MyFooter
    }
  }
  ;
</script>

<style scoped>
  small {
    color: #f1890b;
  }

  h3 {
    margin-top: 20px;
  }

  ul {
    overflow-y: auto;
    max-height: 200px;
    list-style: none;
    padding-left: 10px;
  }

  .d {
    margin: auto;
  }

  .lia {
    float: right;
    margin-left: 5px;
    margin-right: 5px;
  }

  .lbt {
    margin: auto;
  }

  .cdl {
    margin: 5px auto;
  }

  .sr {
    margin: 5px auto;
  }

  .cdrw {
    text-align: center;
    margin-bottom: 20px;
    margin-top: 10px;
  }

  .card {
    margin: 10px auto;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.5);
  }

  .card h5 {
    padding-top: 15px;
  }

  .s {
    color: black;
    text-decoration: none;
  }

  .s:hover {
    color: orange;
  }

  p {
    padding-top: 10px;
  }

  .size {
    max-width: 50px;
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

  #myInput, #myInput2, #myInput3, #myInput4 {
    background-position: 10px 12px; /* Position the search icon */
    background-repeat: no-repeat; /* Do not repeat the icon image */
    width: 100%; /* Full-width */
    font-size: 16px; /* Increase font-size */
    padding: 12px 10px 12px 40px; /* Add some padding */
    border: 1px solid #ddd; /* Add a grey border */
    margin-bottom: 12px; /* Add some space below the input */
  }
</style>
