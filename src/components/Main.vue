<template>
  <div>
    <my-header :key="key"></my-header>
    <main>
      <section id="first">
        <div class="parallax-container">
          <h1 class="parallax-title">
            GlassTech
            <h5>Лучший производитель защитных стекол в России</h5>
          </h1>
          <parallax :speed-factor="0.3" breakpoint="(min-width: 80px)">
            <img src="../../static/image/main.jpg" />
          </parallax>
        </div>
      </section>
      <section>
        <div class="container">
          <h1 v-html="first"></h1>
          <div class="row centered">
            <div id="info" class="font" v-scroll-reveal="{ delay: 200, duration:1000}">
              {{ff}}
              <br />
              <button
                class="order btn btn-warning btn-lg"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >{{button}}</button>
            </div>
            <div id="image2"></div>
          </div>
        </div>
      </section>
      <section class="gray">
        <div id="advantages" class="container">
          <h1 class="second">{{second}}</h1>
          <div class="row">
            <div class="font" v-scroll-reveal="{ delay: 200, duration:1500}">
              <h3>{{sf}}</h3>
              <p class="pinf">{{sff}}</p>
              <i class="fa fa-trophy"></i>
            </div>
            <div class="font" v-scroll-reveal="{ delay: 600, duration:1500}">
              <h3>{{ss}}</h3>
              <p class="pinf">{{ssf}}</p>
              <i class="fa fa-trophy"></i>
            </div>
            <div class="font" v-scroll-reveal="{ delay: 1000, duration:1500}">
              <h3>{{st}}</h3>
              <p class="pinf">{{stf}}</p>
              <i class="fa fa-trophy"></i>
            </div>
          </div>
        </div>
      </section>
      <section id="products">
        <div class="container">
          <h1>{{third}}</h1>
        </div>
        <div class="container" v-scroll-reveal="{ delay: 200, duration: 1000}">
          <div class="row centered">
            <div class="cd">
              <div class="image_glass">
                <img class="none" src="../../static/image/3d.png" />
                <div>
                  <button class="order btn order_cd btn-warning btn-lg">
                    3D СТЕКЛО
                    <h6>от 125 руб.</h6>
                  </button>
                </div>
                <div
                  class="text"
                >Устанавливается на экран смартфона за счет закругленных краев. Стекло облегает дисплей смартфона и органично выглядит.</div>
              </div>
            </div>
            <div class="cd ctr">
              <div class="image_glass">
                <img class="none" src="../../static/image/3d_fiber.png" />
                <div>
                  <button class="order order_cd btn btn-warning btn-lg">
                    3D FIBER
                    <h6>от 65 руб.</h6>
                  </button>
                </div>
                <div class="text">
                  Главная особенность этого вида защитных стекол — окантовка может быть выполнена из силикона под цвет экрана. Клейкая основа наносится исключительно
                  на стекло.
                </div>
              </div>
            </div>
            <div class="cd ctr">
              <div class="image_glass">
                <img class="none" src="../../static/image/silk_screen.png" />
                <div>
                  <button class="order btn order_cd btn-warning btn-lg">
                    SILK SCREEN
                    <h6>от 65 руб.</h6>
                  </button>
                </div>
                <div
                  class="text"
                >Silk Screen 2,5D защитные стекла имеют слегка округленные края. Такие стекла отличаются отличной эргономичностью и высокой прочностью.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="gray">
        <div id="advantages" class="container">
          <h1 class="second">Что вы получите</h1>
          <div class="row">
            <div class="font" v-scroll-reveal="{ delay: 200, duration:1500}">
              <h3>Индивидуальные заказы</h3>
              <p
                class="pinf"
              >Мы принимаем заказы на изготовление нестандартных защитных стекол. Клиентоориентированность — одно из наших многочисленных достоинств.</p>
              <i class="fa fa-bolt"></i>
            </div>
            <div class="font" v-scroll-reveal="{ delay: 600, duration:1500}">
              <h3>Быстрая доставка</h3>
              <p
                class="pinf"
              >От производства до рук клиента — один шаг Мы изо всех сил стараемся, чтобы защитные стекла находили свои смартфоны как можно быстрее.</p>
              <i class="fa fa-truck"></i>
            </div>
            <div class="font" v-scroll-reveal="{ delay: 1000, duration:1500}">
              <h3>Всегда в наличии</h3>
              <p
                class="pinf"
              >Вы можете купить любые модели средним или крупным оптом, благодаря огромному ассортименту стекол, которые всегда доступны для заказа.</p>
              <i class="fa fa-thumbs-up"></i>
            </div>
          </div>
        </div>
      </section>
      <section id="reviwes">
        <div class="container">
          <h1 class="text-center">Отзывы наших клиентов</h1>
          <div id="carouselReviews" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselReviews" data-slide-to="0" class="active"></li>
              <li data-target="#carouselReviews" data-slide-to="1"></li>
              <li data-target="#carouselReviews" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row">
                  <div class="offset-sm-2 col-sm-3 col-md-2">
                    <img
                      src="http://html-plus.in.ua/wp-content/uploads/2019/01/lara.jpg"
                      class="img-fluid rounded-circle d-block m-auto pb-3"
                      alt="Лариса Уварова"
                    />
                  </div>
                  <div class="offset-md-1 col-md-5 col-sm-5">
                    <div class="review">
                      Спасибо за быстрый заказ. Отличный сервис. С менеджером было легко и приятно общаться.
                      <div class="review-author">Лариса Уварова</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row">
                  <div class="offset-sm-2 col-sm-3 col-md-2">
                    <img
                      src="http://html-plus.in.ua/wp-content/uploads/2019/01/igor.jpg"
                      class="img-fluid rounded-circle d-block m-auto pb-3"
                      alt="Игорь Минаев"
                    />
                  </div>
                  <div class="offset-md-1 col-md-5 col-sm-5">
                    <div class="review">
                      Отличный уровень сервиса. Доставили посылку за пару дней. А цены очень приемлемые за подобную доставку.
                      <div class="review-author">Игорь Минаев</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row">
                  <div class="offset-sm-2 col-sm-3 col-md-2">
                    <img
                      src="http://html-plus.in.ua/wp-content/uploads/2019/01/mila.jpg"
                      class="img-fluid rounded-circle d-block m-auto pb-3"
                      alt="Мила Синицина"
                    />
                  </div>
                  <div class="offset-md-1 col-md-5 col-sm-5">
                    <div class="review">
                      Очень понравился товар. Посылка пришла быстро. Заказывыла подруге в подарок. Теперь хочу для себя.
                      <div class="review-author">Мила Синицина</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselReviews"
              role="button"
              data-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselReviews"
              role="button"
              data-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div class="container" id="rew">
          <button @click="query()" class="sr btn btn-primary btn-sm" type="submit">БОЛЬШЕ ОТЗЫВОВ</button>
        </div>
        <div class="container" v-if="flag" v-for="post in posts">
          <div class="card cdrw">
            <h5>{{post.firstname}} {{post.lastname}}</h5>
            <p class="rewp">{{post.text}}</p>
          </div>
        </div>
      </section>
      <section class="gray">
        <div class="container">
          <h1>{{fourth}}</h1>
          <h5>{{fs}}</h5>
          <div>
            <button
              class="order btn btn-warning btn-lg"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >{{button}}</button>
          </div>
        </div>
      </section>
      <section id="contacts">
        <div class="container cnt">
          <h1>Наши контакты</h1>
          <div>
            <div class="col-md-12">
              <p>
                <strong>Телефон</strong>: 88005553535
                <br />
                <strong>Email</strong>: glasstech@gmail.com
                <br />
                <strong>Адрес</strong>: г.Орел, ул.Пушккина, д.35
              </p>
            </div>
            <div class="card col-md-8">
              <form>
                <h3>Cвяжитесь с нами</h3>
                <div class="form-group col-md-12">
                  <label for="inputName">Имя</label>
                  <input v-model="firstname" type="text" class="form-control" id="inputName" />
                  <small v-if="!firstname">Укажите имя</small>
                </div>
                <div class="form-group col-md-12">
                  <label for="inputSurname">Фамилия</label>
                  <input v-model="lastname" type="text" class="form-control" id="inputSurname" />
                  <small v-if="!lastname">Укажите фамилию</small>
                </div>
                <div class="form-group col-md-12">
                  <label for="inputMail">Email</label>
                  <input v-model="email2" type="email" class="form-control" id="inputMail" />
                  <small v-if="!reg.test(email2)">Укажите корректный email</small>
                </div>
                <div class="form-group col-md-12">
                  <label for="inputQuestion">Тема сообщения</label>
                  <select v-model="theme" id="inputQuestion" class="form-control">
                    <option v-for="theme in themes">{{theme.name}}</option>
                  </select>
                  <small v-if="!theme">Укажите тему письма</small>
                </div>
                <div class="form-group col-md-12">
                  <label for="inputQuestion">Текст сообщения</label>
                  <textarea v-model="text" class="col-md-12" rows="5"></textarea>
                  <small v-if="!text">Введите текст письма</small>
                </div>
                <div
                  v-if="!alert2"
                  class="alert alert-success alert-dismissible fade show"
                  role="alert"
                >
                  Ваше письмо отправлено, ожидайте ответа на указанную вами почту!
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
              <button
                id="do"
                v-on:click="checkFeedback(firstname, lastname, theme, text, email2)"
                type="submit"
                class="btn btn-primary order btn btn-warning btn-lg"
              >Отправить</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2402.1542205336877!2d36.04850421595736!3d52.98162780966736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x413210b8958cf83d%3A0xe7f071e2714f4204!2z0J3QsNGD0LPQvtGA0YHQutC-0LUg0YguLCA0MCwg0J7RgNGR0LssINCe0YDQu9C-0LLRgdC60LDRjyDQvtCx0LsuLCAzMDIwMjA!5e0!3m2!1sru!2sru!4v1572288886057!5m2!1sru!2sru"
            width="100%"
            height="350"
            frameborder="0"
            style="border:0;"
            allowfullscreen
          ></iframe>
        </div>
      </section>
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
                    <input v-model="email" type="email" class="form-control" id="inputEmail4" />
                    <small v-if="!reg.test(email)">Укажите корректный email</small>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputCity">Город</label>
                    <select v-model="town" id="inputTown" class="form-control">
                      <option v-for="town in towns">{{town.name}}</option>
                    </select>
                    <small v-if="!town">Укажите город</small>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputPhone">Телефон</label>
                    <input
                      v-model="phone"
                      type="number"
                      min="0"
                      class="form-control"
                      id="inputPhone"
                    />
                    <small v-if="!phone">Укажите номер телефона</small>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-8">
                    <label for="inputAddress">Адрес</label>
                    <input v-model="address" type="text" class="form-control" id="inputAddress" />
                    <small v-if="!address">Укажите адрес</small>
                  </div>
                  <div class="form-group col-md-4">
                    <label for="inputZip">Индекс</label>
                    <input v-model="index" type="number" min="0" class="form-control" id="inputZip" />
                    <small v-if="!index">Укажите индекс</small>
                  </div>
                </div>
                <h5>Выберете продукт</h5>
                <div class="form-row">
                  <div class="form-group col-md-12">
                    <label for="inputState">Модель устройства</label>
                    <select
                      @click="checkSum()"
                      v-model="model"
                      id="inputModel"
                      class="form-control"
                    >
                      <option v-for="model in models">{{model.name}}</option>
                    </select>
                    <small v-if="!model">Укажите модель телефона</small>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputState">Тип стекла</label>
                    <select
                      @click="checkSum()"
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
                      @click="checkSum(), checkDiscount()"
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
                <div v-for="m in md">
                  <h6>Надбавка за модель: {{nadb = m.plus * count}} руб.</h6>
                </div>
                <div>
                  <h6>Скидка: {{discount}} руб.</h6>
                </div>
                <div>
                  <h4>Всего: {{itog = nadb + summa - discount}} руб.</h4>
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
                v-on:click="checkForm(email, town, address, index, model, glass, count, phone, summa, nadb, itog)"
                type="submit"
                class="btn btn-primary order btn btn-warning btn-lg"
              >Заказать</button>
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
              <h5 class="modal-title" id="enter">Вход</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="login">
                <h3>Войти</h3>
                <label for="inputE">Логин (E-mail)</label>
                <input type="text" v-model="mail" class="form-control" id="inputE" required />
                <br />
                <label for="inputP">Пароль</label>
                <input type="password" v-model="password" class="form-control" id="inputP" required />
                <br />
                <button
                  class="btn btn-primary order btn btn-warning btn-lg"
                  data-dismiss="modal"
                  v-on:click="login"
                >Войти</button>
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
import Parallax from "vue-parallaxy";
import { db } from "../main.js";
import firebase from "firebase";
export default {
  name: "imain",
  data() {
    return {
      reg: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
      key: false,
      flag: false,
      alert: true,
      alert2: true,
      towns: [],
      models: [],
      glasses: [],
      orders: [],
      feedbacks: [],
      themes: [],
      posts: [],
      sum: [],
      md: [],
      mail: "",
      password: "",
      login2: "",
      password2: "",
      summa: "",
      nadb: "",
      itog: "",
      discount: 0,
      email: "",
      email2: "",
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
      button: "СДЕЛАТЬ ЗАКАЗ",
      first: "Защитные стекла для телефонов",
      ff:
        'Наша компания занимается оптовой продает защитные стекла для смартфонов по всей России. У нас Вы можете выбрать защитное стекло для следующих марок смартфонов: Apple, Sony, Samsung, Xiaomi, Huawei, Lenovo, Meizu, Nokia, Microsoft, Alcatel, HTC, ASUS. Также в продаже имеются стекла к Apple iWatch и Apple iPad. Мы гарантируем высокое качество защитных стекол и самые низкие цены на них. Оформите заказ в три шага, нажав «Сделать Заказ»."',
      second: "Наши преимущества",
      sf: "Собственное производство",
      ss: "Мониторинг рынка",
      st: "Самые низкие цены",
      sff:
        "Реализуемые защитные стекла производятся на собственной фабрике. Мы гарантируем качество выпущенной продукции.",
      ssf:
        "Мы в курсе тенденций на рынке мобильных устройств! Смартфонам с самыми хрупкими экранами — самые надежные защитные стекла.",
      stf:
        "Мы гарантируем высокое качество продукции и самые низкие цены на защитные стекла. Цена товара Вас приятно удивит!",
      third: "Наши продукты",
      fourth: "Понравилось?",
      fs: "При первом заказе скидка 10%"
    };
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
    checkDiscount() {
      if (this.count >= 5 && this.count < 30) {
        this.itog = this.nadb + this.summa;
        this.discount = Math.round((this.itog / 100) * 10);
        this.itog = Math.round(this.itog - (this.itog / 100) * 10);
      } else {
        this.discount = 0;
      }
      if (this.count >= 30 && this.count < 60) {
        this.itog = this.nadb + this.summa;
        this.discount = Math.round((this.itog / 100) * 15);
        this.itog = Math.round(this.itog - (this.itog / 100) * 15);
      }
      if (this.count >= 60 && this.count < 100) {
        this.itog = this.nadb + this.summa;
        this.discount = Math.round((this.itog / 100) * 30);
        this.itog = Math.round(this.itog - (this.itog / 100) * 30);
      }
      if (this.count >= 100) {
        this.itog = this.nadb + this.summa;
        this.discount = Math.round((this.itog / 100) * 50);
        this.itog = Math.round(this.itog - (this.itog / 100) * 50);
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
      itog
    ) {
      let err_email = this.reg.test(email);
      let err_town = town != "";
      let err_phone = phone != "";
      let err_address = address != "";
      let err_index = index != "";
      let err_model = model != "";
      let err_glass = glass != "";
      let err_count = count != "";

      if (
        err_email &&
        err_town &&
        err_phone &&
        err_address &&
        err_index &&
        err_model &&
        err_glass &&
        err_count
      ) {
        const date = new Date();
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
          itog
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
        this.discount = 0;
      }
    },
    checkFeedback(firstname, lastname, theme, text, email2) {
      let err_email2 = this.reg.test(email2);
      let err_firstname = firstname != "";
      let err_lastname = lastname != "";
      let err_theme = theme != "";
      let err_text = text != "";

      if (
        err_firstname &&
        err_lastname &&
        err_theme &&
        err_text &&
        err_email2
      ) {
        const date = new Date();
        db.collection("feedbacks").add({
          firstname,
          lastname,
          theme,
          text,
          date,
          email2
        });
        this.alert2 = false;
        this.firstname = "";
        this.lastname = "";
        this.theme = "";
        this.text = "";
        this.email2 = "";
      }
    }
  },
  components: { MyHeader, MyFooter, Parallax }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:300|Poiret+One|Roboto&display=swap");
#reviwes {
  padding-top: 0px;
  padding-bottom: 40px;
  font-family: "Rubik", sans-serif;
}
#rew {
  margin-top: 40px;
}
#make {
  margin-bottom: 5px;
  margin-top: 5px;
}
.cdrw {
  margin-left: 10px;
  margin-right: 10px;
}
.rewp {
  width: auto;
}
.card {
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.5);
  max-width: 550px;
}
.modal-footer {
  padding-top: 5px;
  padding-bottom: 5px;
}
.review-author {
  font-size: 22px;
  font-weight: 500;
  margin-top: 30px;
  text-transform: uppercase;
}

.carousel-indicators {
  bottom: -58px;
}

.carousel-indicators li {
  background-color: rgba(0, 0, 0, 0.5);
}

.carousel-indicators .active {
  background-color: #000;
}

.carousel-control-next-icon,
.carousel-control-prev-icon {
  width: 35px;
  height: 35px;
}

.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
}

.carousel-control-next-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
}

@media (max-width: 575px) {
  .review {
    padding-left: 40px;
    padding-right: 20px;
  }
}
.parallax-container {
  position: relative;
}
.parallax-title {
  position: absolute;
  top: 30%;
  left: 0;
  right: 0;
  padding: 20px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  text-align: center;
}
small {
  color: #f1890b;
}
button {
  font-family: "Montserrat", sans-serif;
}
.font {
  margin: auto;
}
h3 {
  font-family: "Roboto", sans-serif;
  font-size: 28px;
}
h1 {
  font-family: "Roboto", sans-serif;
  font-size: 48px;
}
.order_cd {
  padding-bottom: 0px;
  padding-top: 0px;
  min-width: 300px;
  margin-top: 0px !important;
  margin-bottom: 10px !important;
  border-radius: 0em !important;
}
.ctr {
  margin-left: 20px;
}
.text {
  padding-right: 5px;
  padding-left: 5px;
  padding-bottom: 20px;
  border: 2px;
  font-family: "Montserrat", sans-serif;
}
.cd {
  max-width: 298px;
  max-height: 520px;
  margin: auto;
  margin-top: 10px;
}
p {
  width: auto !important;
  margin: auto;
  margin-bottom: 20px;
}
.carouselExampleControls {
  width: auto;
}
.ico {
  width: 380px;
}
h1 {
  padding-top: 20px;
}
p {
  width: 380px;
  padding-right: 10px;
  padding-left: 10px;
  font-family: "Montserrat", sans-serif;
}
.row {
  padding-top: 20px;
}
#advantages {
  padding-bottom: 20px;
}
#image {
  background-image: url("../../static/image/main.jpg");
  background-position: center;
  min-height: 680px;
  width: 100%;
  text-align: center;
}
#image2 {
  background-image: url("../../static/image/zxc.png");
  min-height: 360px;
  min-width: 350px;
  margin: auto;
}
.pinf {
  max-width: 380px !important;
}
.container {
  text-align: center;
  padding-bottom: 20px;
}
.gray {
  background-color: #dddddd;
}
#info {
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
  max-width: 700px;
  font-size: 20px;
  font-family: "Montserrat", sans-serif;
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