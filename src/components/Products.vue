<template>
  <div>
    <my-pheader></my-pheader>
    <main>
      <div class="container">
        <h1>Наши продукты</h1>
        <div class="container">
          <div class="row centered">
            <div v-for="gl in glasses" class="cd">
              <div class="image_glass">
                <img v-bind:src=gl.picture>
                <div>
                  <button
                    class="order btn order_cd btn-warning btn-lg"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                    v-on:click="glass = gl.name"
                  >
                    {{gl.name}}
                    <h6>от {{gl.price}} руб.</h6>
                  </button>
                </div>
                <div
                  class="text"
                >{{gl.description}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Создание заказа</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <h5>Укажите контактные данные</h5>
                <div class="form-row">
                  <div class="form-group col-md-12">
                    <label for="inputEmail4">Email</label>
                    <input
                      v-model="email"
                      @click="firstClient()"
                      type="email"
                      class="form-control"
                      id="inputEmail4"
                    />
                    <small v-if="!reg.test(email)">Укажите корректный email</small>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputTown">Город</label>
                    <select v-model="town" id="inputTown" class="form-control">
                      <option v-for="town in towns">{{town.name}}</option>
                    </select>
                    <small v-if="!town">Укажите город</small>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputPhone">Телефон</label>
                    <vue-tel-input
                      v-model="phone"
                      type="number"
                      min="0"
                      placeholder
                      class="form-control"
                      id="inputPhone"
                    />
                    <small v-if="!phone">Укажите номер телефона</small>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-8">
                    <label for="inputAddress">Адрес</label>
                    <input v-model="address" type="text" class="form-control" id="inputAddress"/>
                    <small v-if="!address">Укажите адрес</small>
                  </div>
                  <div class="form-group col-md-4">
                    <label for="inputZip">Индекс</label>
                    <input v-model="index" type="number" min="100000" max="999999" class="form-control" id="inputZip"/>
                    <small v-if="!index">Укажите индекс</small>
                  </div>
                </div>
                <h5>Выберете продукт</h5>
                <div class="form-row">
                  <div class="form-group col-md-12">
                    <label for="inputModel">Модель устройства</label>
                    <input v-model="model" type="text" class="form-control" id="inputModel"/>
                    <small v-if="!model">Укажите модель телефона</small>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-12">
                    <label for="inputDisplay">Диагональ экрана (дюйм)</label>
                    <input v-model="display" @click="checkPlus(), firstClient(), checkDiscount()" type="number" step="0.1" class="form-control" id="inputDisplay"/>
                    <small v-if="!display">Укажите диагональ</small>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputGlass">Тип стекла</label>
                    <select
                      @click="checkSum(), firstClient(), checkDiscount()"
                      v-model="glass"
                      id="inputGlass"
                      class="form-control"
                    >
                      <option v-for="glass in glasses">{{glass.name}}</option>
                    </select>
                    <small v-if="!glass">Укажите тип стекла</small>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputCount">Количество</label>
                    <input
                      @click="checkSum(), firstClient(), checkDiscount()"
                      min="1"
                      v-model="count"
                      type="number"
                      class="form-control"
                      id="inputCount"
                    />
                    <small v-if="!count">Укажите количество</small>
                  </div>
                </div>
                <div v-for="s in sum">
                  <h6>Итого: {{summa = s.price * count}} руб.</h6>
                </div>
                <div>
                  <h6>Надбавка за модель: {{nb = nadb * count}} руб.</h6>
                </div>
                <div>
                  <h6>Скидка: {{discount}} руб.</h6>
                </div>
                <div>
                  <h4>Всего: {{itog = nb + summa - discount}} руб.</h4>
                </div>
                <div
                  v-if="!alert"
                  class="alert alert-success alert-dismissible fade show"
                  role="alert"
                >
                  Ваш заказ принят, ожидайте ответа на указанную вами почту!
                  <button
                    type="button"
                    class="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                id="make"
                v-on:click="checkForm(email, town, address, index, model, glass, count, phone, summa, nadb, itog, display)"
                type="submit"
                class="btn btn-primary order btn btn-warning btn-lg"
              >Заказать
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="enter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Вход</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="login">
                <h3>Войти</h3>
                <label for="inputE">Логин (E-mail)</label>
                <input type="text" v-model="mail" class="form-control" id="inputE" required/>
                <br/>
                <label for="inputP">Пароль</label>
                <input type="password" v-model="password" class="form-control" id="inputP" required/>
                <br/>
                <button
                  class="btn btn-primary order btn btn-warning btn-lg"
                  data-dismiss="modal"
                  v-on:click="login"
                >Войти
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
  import ProductsHeader from "./ProductsHeader";
  import MyFooter from "./Footer.vue";
  import {db} from "../main.js";
  import firebase from "firebase";
  import Parallax from "vue-parallaxy";
  import {VueTelInput} from "vue-tel-input";

  export default {
    name: "prods",
    data() {
      return {
        page: "products",
        reg: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
        key: false,
        flag: false,
        alert: true,
        alert2: true,
        new: false,
        towns: [],
        models: [],
        glasses: [],
        orders: [],
        feedbacks: [],
        themes: [],
        posts: [],
        sum: [],
        md: [],
        cl: [],
        mail: "",
        password: "",
        login2: "",
        password2: "",
        display: "",
        summa: "",
        nadb: "",
        nb: "",
        itog: "",
        discount: 0,
        email: "",
        email2: "",
        title: "",
        town: "",
        address: "",
        index: "",
        model: "",
        glass: "",
        count: "",
        phone: "",
        firstname: "",
        lastname: "",
        theme: "",
        text: "",
      }
    },
    firestore() {
      return {
        towns: db.collection("towns").orderBy("name"),
        models: db.collection("models").orderBy("name"),
        glasses: db.collection("glasses").orderBy("name"),
        orders: db.collection("orders").orderBy("date"),
        feedbacks: db.collection("feedbacks").orderBy("date"),
        themes: db.collection("themes").orderBy("name")
      };
    },
    methods: {
      login() {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.mail, this.password)
          .then(user => {
            this.$router.replace("/admin");
          })
          .catch(err => {
            alert(err.message);
          });
        this.key = true;
      },
      firstClient() {
        let clArray = [];
        db.collection("orders")
          .where("email", "==", this.email)
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              let cli = doc.data();
              cli.id = doc.id;
              clArray.push(cli);
              console.log(doc.data());
            });
            this.cl = clArray;
          });
        if (this.cl.length == 0 && this.email != "") {
          this.new = true;
          console.log(this.new);
        } else {
          this.new = false;
          console.log(this.new);
        }
      },
      checkPlus() {
        if (this.display >= 3 && this.display <= 4) {
          this.nadb = 25
        }
        if (this.display >= 4.1 && this.display <= 4.9) {
          this.nadb = 50
        }
        if (this.display >= 5 && this.display <= 5.4) {
          this.nadb = 75
        }
        if (this.display >= 5.5 && this.display <= 5.9) {
          this.nadb = 100
        }
        if (this.display >= 6) {
          this.nadb = 125
        }
      },
      checkDiscount() {
        if (this.count < 5 && this.new == true) {
          this.itog = this.nb + this.summa;
          this.discount = Math.round((this.itog / 100) * 10);
          this.itog = Math.round(this.itog - (this.itog / 100) * 10);
        } else {
          this.discount = 0;
        }
        if (this.count >= 5 && this.count < 30) {
          if (this.new == true) {
            this.itog = this.nb + this.summa;
            this.discount = Math.round((this.itog / 100) * 20);
            this.itog = Math.round(this.itog - (this.itog / 100) * 20);
            console.log(this.nb, this.summa, this.discount, this.itog)
          } else {
            this.itog = this.nb + this.summa;
            console.log(this.itog);
            this.discount = Math.round((this.itog / 100) * 10);
            this.itog = Math.round(this.itog - (this.itog / 100) * 10);
          }
        }
        if (this.count >= 30 && this.count < 60) {
          if (this.new == true) {
            this.itog = this.nb + this.summa;
            this.discount = Math.round((this.itog / 100) * 25);
            this.itog = Math.round(this.itog - (this.itog / 100) * 25);
          } else {
            this.itog = this.nb + this.summa;
            this.discount = Math.round((this.itog / 100) * 15);
            this.itog = Math.round(this.itog - (this.itog / 100) * 15);
          }
        }
        if (this.count >= 60 && this.count < 100) {
          if (this.new == true) {
            this.itog = this.nb + this.summa;
            this.discount = Math.round((this.itog / 100) * 40);
            this.itog = Math.round(this.itog - (this.itog / 100) * 40);
          } else {
            this.itog = this.nb + this.summa;
            this.discount = Math.round((this.itog / 100) * 30);
            this.itog = Math.round(this.itog - (this.itog / 100) * 30);
          }
        }
        if (this.count >= 100) {
          if (this.new == true) {
            this.itog = this.nb + this.summa;
            this.discount = Math.round((this.itog / 100) * 60);
            this.itog = Math.round(this.itog - (this.itog / 100) * 60);
          } else {
            this.itog = this.nb + this.summa;
            this.discount = Math.round((this.itog / 100) * 50);
            this.itog = Math.round(this.itog - (this.itog / 100) * 50);
          }
        }
        console.log(this.itog, this.discount);
      },
      checkSum() {
        let smArray = [];
        db.collection("glasses")
          .where("name", "==", this.glass)
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              let sm = doc.data();
              sm.id = doc.id;
              smArray.push(sm);
              console.log(doc.data());
            });
            this.sum = smArray;
          });
        let mdArray = [];
        db.collection("models")
          .where("name", "==", this.model)
          .get()
          .then(query => {
            query.forEach(doc => {
              let md = doc.data();
              md.id = doc.id;
              mdArray.push(md);
              console.log(doc.data());
            });
            this.md = mdArray;
          });
      },
      query() {
        let postsArray = [];
        db.collection("feedbacks")
          .where("theme", "==", "Отзыв")
          .limit(10)
          .orderBy("date", "desc")
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              let post = doc.data();
              post.id = doc.id;
              postsArray.push(post);
              console.log(doc.data());
            });
            this.posts = postsArray;
          });
        this.flag = this.flag ? false : true;
      },
      selectGlass() {
        let glassArray = [];
        db.collection("glasses")
        .where("name", "==", this.glasses.name)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach()
        });
      },
      checkForm(
        email,
        town,
        address,
        index,
        model,
        glass,
        count,
        phone,
        summa,
        nadb,
        itog,
        display
      ) {
        let err_email = this.reg.test(email);
        let err_town = town != "";
        let err_phone = phone != "";
        let err_address = address != "";
        let err_index = index != "";
        let err_model = model != "";
        let err_glass = glass != "";
        let err_count = count != "";
        let err_display = display != "";

        if (
          err_email &&
          err_town &&
          err_phone &&
          err_address &&
          err_index &&
          err_model &&
          err_glass &&
          err_count &&
          err_display
        ) {
          const date = new Date();
          const status = 'В обработке';
          db.collection("orders").add({
            email,
            town,
            address,
            index,
            model,
            glass,
            count,
            date,
            phone,
            summa,
            nadb,
            itog,
            status,
            display,
          });
          this.alert = false;
          this.email = "";
          this.town = "";
          this.address = "";
          this.index = "";
          this.model = "";
          this.glass = "";
          this.count = "";
          this.phone = "";
          this.display = "";
          this.discount = 0;
        }
      },
      checkFeedback(firstname, lastname, theme, title, text, email2) {
        let err_email2 = this.reg.test(email2);
        let err_firstname = firstname != "";
        let err_lastname = lastname != "";
        let err_theme = theme != "";
        let err_title = title != "";
        let err_text = text != "";

        if (
          err_firstname &&
          err_lastname &&
          err_theme &&
          err_text &&
          err_title &&
          err_email2
        ) {
          const date = new Date();
          db.collection("feedbacks").add({
            firstname,
            lastname,
            theme,
            text,
            title,
            date,
            email2
          });
          this.alert2 = false;
          this.firstname = "";
          this.lastname = "";
          this.theme = "";
          this.title = "";
          this.text = "";
          this.email2 = "";
        }
      }
    },
    components: {'my-pheader': ProductsHeader, MyFooter, Parallax, VueTelInput}
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
