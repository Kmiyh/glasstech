<template>
  <div>
    <my-header/>
    <main>
      <div class="container">
        <h1>Панель администратора</h1>
        <button class="sr btn btn-primary btn-md" v-on:click="logout">Выйти</button>

        <ul class="nav nav-tabs" id="myTab" role="tablist" style="overflow-y: hidden">
          <li class="nav-item">
            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#orders" role="tab" aria-controls="orders"
               aria-selected="true">Заказы</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#feedbacks" role="tab"
               aria-controls="feedbacks" aria-selected="false">Обратная связь</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="contact-tab" data-toggle="tab" href="#data" role="tab" aria-controls="data"
               aria-selected="false">Данные</a>
          </li>
        </ul>

        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="orders" role="tabpanel" aria-labelledby="home-tab">
            <div class="row col-md-12 d">
              <div class="card col-md-12">
                <div class="row">
                  <div class="mn col-md-12">
                    <h5>Поиск заказа по номеру</h5>
                    <div class="row col-md-12">
                      <input class="form-control col-md-12" type="text" id="myInput" placeholder="Поиск"
                             aria-label="Search"
                             v-on:keyup="myFunction()">
                    </div>
                    <h5 style="padding-top: 0">Фильтровать</h5>
                    <div class="row col-md-12">
                      <div>
                        <p style="margin-bottom: 0; padding-top: 0">по типу стекла</p>
                        <select v-model="filter2"
                                v-on:click.prevent="filterOrders(filter2, filter3)"
                                id="filter2" class="form-control">
                          <option>Все</option>
                          <option>3D</option>
                          <option>3D FIBER</option>
                          <option>SILK SCREEN 2,5D</option>
                        </select>
                      </div>
                      <div>
                        <p style="margin-bottom: 0; margin-left: 10px; padding-top: 0">по статусу</p>
                        <select v-model="filter3" style="margin-left: 10px;"
                                v-on:click.prevent="filterOrders(filter2, filter3)"
                                id="filter3" class="form-control">
                          <option>Все</option>
                          <option>В обработке</option>
                          <option>Изготавливается</option>
                          <option>Упаковывается</option>
                          <option>Передан доставщику</option>
                          <option>Доставляется</option>
                          <option>В пункте выдачи</option>
                          <option>Закрыт</option>
                        </select>
                      </div>
                      <div style="margin-top: auto;">
                        <button
                          id="o_filt"
                          v-on:click.prevent= "resetFilterOrder(filter2, filter3), filterOrders(filter2, filter3)"
                          style="margin-left: 20px; margin-bottom: 0"
                          type="submit"
                          class="btn btn-primary order btn btn-warning btn-md"
                        >Сбросить
                        </button>
                      </div>
                    </div>
                    <div>
                      <hr>
                      <div class="row col-md-12">
                        <h5 style="padding-top: 0">Список заказов: всего {{counter}} шт.</h5>
                      </div>
                      <ul id="myUL">
                        <li v-for="order in g_feed">
                          <a href="#" v-on:click="showOrder(order.id)" class="s">{{order.id}}</a>
                          <a href="#" class="lia" v-on:click="deleteOrder(order.id)">Удалить</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card col-md-12" v-for="order in sh_ord">
                <div class="row">
                  <div class="col-md-6">
                    <h5>Информация о заказе</h5>
                    <b>Номер заказа:</b> {{time_id}}<br>
                    <b>Модель телефона:</b> {{order.model}} <br>
                    <b>Размер экрана:</b> {{order.display}} дм.<br>
                    <b>Тип стекла:</b> {{order.glass}} <br>
                    <b>Количество:</b> {{order.count}} шт.<br>
                    <b>Итог заказа:</b> {{order.itog}} руб.<br>
                    <b>Статус:</b> {{order.status}} <br>
                    <h5>Контактная информация</h5>
                    <b>Email:</b> {{order.email}} <br>
                    <b>Телефон:</b> {{order.phone}} <br>
                    <b>Город:</b> {{order.town}} <br>
                    <b>Адрес:</b> {{order.address}} <br>
                    <b>Индекс:</b> {{order.index}} <br>
                  </div>
                  <div class="col-md-6">
                    <form>
                      <h5>Обновить статус</h5>
                      <div class="form-row">
                        <div class="form-group col-md-12">
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
                      <h5>Связь с клиентом</h5>
                      <div class="form-group">
                        <input v-model="author2 = order.email" type="email" class="form-control" id="inputOrder"
                               disabled/>
                      </div>
                      <div class="form-group" style="margin-bottom: 0">
                        <textarea v-model="text2" class="col-md-12" rows="5"/>
                        <small v-if="!text2">Введите текст письма</small><br>
                      </div>
                      <button
                        style="margin-top: 5px;"
                        v-on:click="addLetter(text2, author2)"
                        type="submit"
                        class="btn btn-primary order btn btn-warning btn-md"
                      >Отправить
                      </button>
                      <h5>Удалить заказ</h5>
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
          <div class="tab-pane fade" id="feedbacks" role="tabpanel" aria-labelledby="profile-tab">
            <div class="row col-md-12 d">
              <div class="card col-md-12">
                <div class="row">
                  <div class="mn col-md-12">
                    <h5>Поиск по заголовку письма</h5>
                    <div class="row col-md-12">
                      <input class="form-control col-md-12" type="text" id="myInput4" placeholder="Поиск"
                             aria-label="Search"
                             v-on:keyup="myFunction4()">
                    </div>
                    <h5 style="padding-top: 0">Фильтровать</h5>
                    <div class="row col-md-12">
                      <div>
                        <p style="margin-bottom: 0; padding-top: 0">по типу письма</p>
                        <select v-model="filter" v-on:click.prevent="filterFeedbacks(filter)"
                                id="filter" class="form-control col-md-12">
                          <option>Все</option>
                          <option>Отзыв</option>
                          <option>Вопрос</option>
                          <option>Предложение</option>
                        </select>
                      </div>
                      <div style="margin-top: auto;">
                        <button
                          id="f_filt"
                          v-on:click.prevent= "resetFilterFeedback(filter), filterFeedbacks(filter)"
                          style="margin-left: 10px; margin-bottom: 0"
                          type="submit"
                          class="btn btn-primary order btn btn-warning btn-md"
                        >Сбросить
                        </button>
                      </div>
                    </div>
                    <div>
                      <hr>
                      <div class="row col-md-12">
                        <h5 style="padding-top: 0">Список писем: всего {{counter2}} шт.</h5>
                      </div>
                      <div v-if="filter === 'Все'">
                        <ul id="myUL4">
                          <li v-for="feed in feedbacks">
                            <a href="#" v-on:click="showFeedback(feed.id)" class="s">{{feed.title}}</a>
                            <a href="#" class="lia" v-on:click="deleteFeedbacks(feed.id)">Удалить</a>
                          </li>
                        </ul>
                      </div>
                      <div v-else>
                        <ul id="myUL4">
                          <li v-for="feed in f_feed">
                            <a href="#" v-on:click="showFeedback(feed.id)" class="s">{{feed.title}}</a>
                            <a href="#" class="lia" v-on:click="deleteFeedbacks(feed.id)">Удалить</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card col-md-12" v-for="feed in sh_feed">
                <div class="row">
                  <div class="col-md-6">
                    <h5>Информация об отзыве</h5>
                    <b>Email:</b> {{feed.email2}}<br>
                    <b>Имя:</b> {{feed.firstname}}<br>
                    <b>Фамилия:</b> {{feed.lastname}} <br>
                    <b>Тема письма:</b> {{feed.theme}}<br>
                    <b>Заголовок:</b> {{feed.title}}<br>
                    <b>Текст:</b> {{feed.text}} <br>
                  </div>
                  <div class="col-md-6">
                    <h5>Написать ответ</h5>
                    <div class="form-group">
                      <input v-model="author = feed.email2" type="email" class="form-control" id="inputAuthorOrder"
                             disabled/>
                    </div>
                    <div class="form-group" style="margin-bottom: 0">
                      <textarea v-model="text" class="col-md-12" rows="5"/>
                      <small v-if="!text">Введите текст письма</small><br>
                    </div>
                    <button
                      style="margin-top: 5px;"
                      v-on:click="addLetter(text, author)"
                      type="submit"
                      class="btn btn-primary order btn btn-warning btn-md"
                    >Отправить
                    </button>
                    <h5>Удалить отзыв</h5>
                    <button
                      v-on:click.prevent="deleteFeedbacks(time_id)"
                      type="submit"
                      class="btn btn-primary order btn btn-warning btn-md"
                    >Удалить
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="data" role="tabpanel" aria-labelledby="contact-tab">
            <div class="row col-md-12 d">
              <div class="card col-md-12">
                <div class="row">
                  <div class="col-md-6">
                    <h5>Список стекол</h5>
                    <input class="form-control" type="text" id="myInput5" placeholder="Поиск" aria-label="Search"
                           v-on:keyup="myFunction5()">
                    <ul id="myUL5">
                      <li v-for="glass in glasses">
                        <a href="#" style="pointer-events: none; cursor: default;" class="s">{{glass.name}} -
                          {{glass.price}}
                          руб.</a>
                        <a href="#" class="lia" v-on:click="deleteGlass(glass.id)">Удалить</a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-6">
                    <form>
                      <h5>Добавить стекло</h5>
                      <div class="form-row">
                        <div class="form-group col-md-12">
                          <input v-model="name_g" type="text" class="form-control" id="inputGlass"/>
                          <small v-if="!glass">Укажите название стекла</small>
                          <input v-model="price_g" type="number" class="form-control" id="inputGlassPrice"/>
                          <small v-if="!price">Укажите стоимость стекла</small>
                        </div>
                      </div>
                      <button
                        v-on:click.prevent="addGlass(name_g, price_g)"
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
        counter: 0,
        counter2: 0,
        status: "",
        code: "",
        del_code: "",
        iden: "",
        show: "",
        flag_o: false,
        flag_m: false,
        flag_t: false,
        flag_tm: false,
        filter: "Все",
        f_feed: [],
        g_feed: [],
        filter2: "Все",
        filter3: "Все",
        name_t: "",
        name_tm: "",
        name_td: "",
        name_th: "",
        name_g: "",
        price_g: "",
        date_f: 0,
        plus: "",
        price: "",
        towns: [],
        themes: [],
        glasses: [],
        th: [],
        ord: [],
        town: "",
        theme: "",
        glass: "",
        text: "",
        text2: "",
        author: "",
        orders: [],
        feedbacks: [],
        sh_ord: [],
        sh_feed: [],
        time_id: ""
      };
    },
    firestore() {
      return {
        towns: db.collection("towns").orderBy("name"),
        orders: db.collection("orders").orderBy("date"),
        feedbacks: db.collection("feedbacks").orderBy("date"),
        themes: db.collection("themes").orderBy("name"),
        glasses: db.collection("glasses").orderBy("name")
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
      myFunction5() {
        var input, filter, ul, li, a, i;
        input = document.getElementById('myInput5');
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL5");
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
      resetFilterOrder() {
        this.filter2 = 'Все';
        this.filter3 = 'Все';
      },
      resetFilterFeedback() {
        this.filter = 'Все';
      },
      filterOrders(name, name2) {
        let feed = [];
        this.counter = 0;
        if (this.filter2 !== 'Все' && this.filter3 === 'Все') {
          console.log('не все, все');
          db.collection("orders")
            .where("glass", "==", this.filter2)
            .get()
            .then(query => {
              query.forEach(doc => {
                let md = doc.data();
                md.id = doc.id;
                feed.push(md);
                console.log(doc.data());
                this.counter += 1;
              });
              this.g_feed = feed;
            });
        }
        if (this.filter2 === 'Все' && this.filter3 !== 'Все') {
          console.log('все, не все');
          db.collection("orders")
            .where("status", "==", this.filter3)
            .get()
            .then(query => {
              query.forEach(doc => {
                let md = doc.data();
                md.id = doc.id;
                feed.push(md);
                console.log(doc.data());
                this.counter += 1;
              });
              this.g_feed = feed;
            });
        }
        if (this.filter2 === 'Все' && this.filter3 === 'Все') {
          console.log('все, все');
          db.collection("orders")
            .get()
            .then(query => {
              query.forEach(doc => {
                let md = doc.data();
                md.id = doc.id;
                feed.push(md);
                console.log(doc.data());
                this.counter += 1;
              });
              this.g_feed = feed;
            });
        }
        if (this.filter2 !== 'Все' && this.filter3 !== 'Все') {
          console.log('не все, не все');
          db.collection("orders")
            .where("glass", "==", this.filter2)
            .where("status", "==", this.filter3)
            .get()
            .then(query => {
              query.forEach(doc => {
                let md = doc.data();
                md.id = doc.id;
                feed.push(md);
                console.log(doc.data());
                this.counter += 1;
              });
              this.g_feed = feed;
            });
        }
      },
      filterFeedbacks(name) {
        let feed = [];
        this.counter2 = 0;



        if (this.filter === 'Все') {
          db.collection("feedbacks")
            .get()
            .then(query => {
              query.forEach(doc => {
                let md = doc.data();
                md.id = doc.id;
                feed.push(md);
                console.log(doc.data());
                this.counter2 += 1;
              });
              this.f_feed = feed;
            });
        }
        if (this.filter !== 'Все') {
          db.collection("feedbacks")
            .where("theme", "==", this.filter)
            .get()
            .then(query => {
              query.forEach(doc => {
                let md = doc.data();
                md.id = doc.id;
                feed.push(md);
                console.log(doc.data());
                this.counter2 += 1;
              });
              this.f_feed = feed;
            });
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
      showFeedback(id) {
        let showArray = [];
        this.time_id = id;
        db.collection('feedbacks').doc(id)
          .get()
          .then(doc => {
            let sh = doc.data();
            showArray.push(sh);
          });
        this.sh_feed = showArray;
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
      deleteGlass(id) {
        db.collection('glasses').doc(id).delete();
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
                try {
                  db.collection("themes").doc(name).set({name});
                  this.name_tm = "";
                }
                catch (e) {
                  alert('Нет прав доступа')
                }
              }
            }
          });
      },
      addGlass(name, price) {
        db.collection('glasses').doc(name)
          .get()
          .then(doc => {
            if (doc.exists) {
              alert('Такое стекло уже существует')
            } else {
              let err_glass = name != "";
              let err_price = price != "";
              if (err_glass && err_price) {
                db.collection("glasses").doc(name).set({name, price});
              }
              this.name_g = "";
              this.price_g = "";
            }
          });
      },
      addLetter(text, email) {
        db.collection('letters').add({
          email,
          text
        });
        alert('Письмо отправлено!');
        this.text = "";
        this.text2 = "";
      }
    }
    ,
    created: function () {
      this.filterOrders();
      this.filterFeedbacks();
    }
    ,
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
    max-height: 400px;
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

  .sr {
    margin: 5px auto;
  }

  .mn {
    min-height: 560px;
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
