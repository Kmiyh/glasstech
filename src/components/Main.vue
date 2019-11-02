<template>
  <div>
    <my-header></my-header>
    <main>
      <section>
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
      <section class="gray">
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
      <section>
        <div id="advantages" class="container">
          <h1 class="second">{{second}}</h1>
          <div class="row">
            <div class="font" v-scroll-reveal="{ delay: 200, duration:1500}">
              <h3>{{sf}}</h3>
              <p>{{sff}}</p>
              <i class="fa fa-trophy"></i>
            </div>
            <div class="font" v-scroll-reveal="{ delay: 600, duration:1500}">
              <h3>{{ss}}</h3>
              <p>{{ssf}}</p>
              <i class="fa fa-trophy"></i>
            </div>
            <div class="font" v-scroll-reveal="{ delay: 1000, duration:1500}">
              <h3>{{st}}</h3>
              <p>{{stf}}</p>
              <i class="fa fa-trophy"></i>
            </div>
          </div>
        </div>
      </section>
      <section class="gray">
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
                >Устанавливается на весь экран смартфона за счет закругленных краев. Оно идеально облегает дисплей смартфона и органично на нем выглядит.</div>
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
                <div
                  class="text"
                >Главная особенность данного вида защитных стекол – окантовка может быть выполнена из силикона под цвет экрана. Клейкая основа наносится исключительно на стекло.</div>
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
      <section>
        <div id="advantages" class="container">
          <h1 class="second">Что вы получите</h1>
          <div class="row">
            <div class="font" v-scroll-reveal="{ delay: 200, duration:1500}">
              <h3>Индивидуальные заказы</h3>
              <p>Мы принимаем заказы на изготовление нестандартных защитных стекол. Клиентоориентированность – одно из наших многочисленных достоинств.</p>
              <i class="fa fa-bolt"></i>
            </div>
            <div class="font" v-scroll-reveal="{ delay: 600, duration:1500}">
              <h3>Быстрая доставка</h3>
              <p>От производства до рук клиента – один шаг. Мы изо всех сил стараемся, чтобы защитные стекла находили свои смартфоны как можно быстрее</p>
              <i class="fa fa-truck"></i>
            </div>
            <div class="font" v-scroll-reveal="{ delay: 1000, duration:1500}">
              <h3>Всегда в наличии</h3>
              <p>Благодаря огромному ассортименту стекол, которые всегда доступны для заказа, Вы можете купить любые модели средним или крупным оптом.</p>
              <i class="fa fa-thumbs-up"></i>
            </div>
          </div>
        </div>
      </section>
      <section id="reviwes" class="gray">
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
      </section>
      <section>
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
                    <small v-if="!err_email">Укажите корректный email</small>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputCity">Город</label>
                    <select v-model="town" id="inputTown" class="form-control">
                      <option v-for="town in towns">{{town.name}}</option>
                    </select>
                    <small v-if="!err_town">Укажите город</small>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputPhone">Телефон</label>
                    <input v-model="phone" type="number" class="form-control" id="inputPhone" />
                    <small v-if="!err_phone">Укажите номер телефона</small>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-8">
                    <label for="inputAddress">Адрес</label>
                    <input v-model="address" type="text" class="form-control" id="inputAddress" />
                    <small v-if="!err_address">Укажите адрес</small>
                  </div>
                  <div class="form-group col-md-4">
                    <label for="inputZip">Индекс</label>
                    <input v-model="index" type="number" class="form-control" id="inputZip" />
                    <small v-if="!err_index">Укажите индекс</small>
                  </div>
                </div>
                <h5>Выберете продукт</h5>
                <div class="form-row">
                  <div class="form-group col-md-12">
                    <label for="inputState">Модель устройства</label>
                    <select v-model="model" id="inputModel" class="form-control">
                      <option v-for="model in models">{{model.name}}</option>
                    </select>
                    <small v-if="!err_model">Укажите модель телефона</small>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputState">Тип стекла</label>
                    <select v-model="glass" id="inputGlass" class="form-control">
                      <option v-for="glass in glasses">{{glass.name}}</option>
                    </select>
                    <small v-if="!err_glass">Укажите тип стекла</small>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputCount">Количество</label>
                    <input v-model="count" type="number" class="form-control" id="inputCount" />
                    <small v-if="!err_count">Укажите количество</small>
                  </div>
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
                v-on:click="checkForm(email, town, address, index, model, glass, count, phone)"
                type="submit"
                class="btn btn-primary order btn btn-warning btn-lg"
              >Заказать</button>
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
export default {
  name: "imain",
  data() {
    return {
      er: true,
      err_email: true,
      err_town: true,
      err_address: true,
      err_index: true,
      err_model: true,
      err_glass: true,
      err_count: true,
      err_phone: true,
      alert: true,
      towns: [],
      models: [],
      glasses: [],
      orders: [],
      email: "",
      town: "",
      address: "",
      index: "",
      model: "",
      glass: "",
      count: "",
      phone: "",
      button: "СДЕЛАТЬ ЗАКАЗ",
      first: "Защитные стекла для телефонов",
      ff:
        'Наша компания занимается оптовой продажей защитных стекол для смартфонов по всей России. У нас Вы можете выбрать защитное стекло для следующих марок смартфонов: Apple, Sony, Samsung, Xiaomi, Huawei, Lenovo, Meizu, Nokia, Microsoft, Alcatel, HTC, ASUS. Также в продаже имеются стекла к Apple iWatch и Apple iPad. Мы гарантируем высокое качество защитных стекол и самые низкие цены на них. Оформите заказ в несколько шагов, нажав «Сделать Заказ»."',
      second: "Наши преимущества",
      sf: "Собственное производство",
      ss: "Мониторинг рынка",
      st: "Самые низкие цены",
      sff:
        "­­Реализуемые нами защитные стекла производятся на собственной фабрике! Мы можеем гарантировать качество выпущенной нами продукции.",
      ssf:
        "Мы в курсе всех тенденций на рынке мобильных устройств! Смартфонам с самыми хрупкими экранами – самые надежные защитные стекла.",
      stf:
        "Мы гарантируем не только высокое качество продукции, но и самые низкие цены на защитные стекла. Цена товара Вас приятно удивит!­­ ",
      third: "Виды защитных стекол",
      fourth: "Понравилось?",
      fs: "При первом заказе скидка 10%"
    };
  },
  firestore() {
    return {
      towns: db.collection("towns").orderBy("name"),
      models: db.collection("models").orderBy("name"),
      glasses: db.collection("glasses").orderBy("name"),
      orders: db.collection("orders").orderBy("date")
    };
  },
  methods: {
    checkForm(email, town, address, index, model, glass, count, phone) {
      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if (reg.test(email) == false) {
        this.err_email = false;
      } else {
        this.err_email = true;
      }
      if (town == "") {
        this.err_town = false;
      } else {
        this.err_town = true;
      }
      if (phone == "") {
        this.err_phone = false;
      } else {
        this.err_phone = true;
      }
      if (address == "") {
        this.err_address = false;
      } else {
        this.err_address = true;
      }
      if (index == "") {
        this.err_index = false;
      } else {
        this.err_index = true;
      }
      if (model == "") {
        this.err_model = false;
      } else {
        this.err_model = true;
      }
      if (glass == "") {
        this.err_glass = false;
      } else {
        this.err_glass = true;
      }
      if (count == "") {
        this.err_count = false;
      } else {
        this.err_count = true;
      }
      if (
        this.err_email == true &&
        this.err_town == true &&
        this.err_phone == true &&
        this.err_address == true &&
        this.err_index == true &&
        this.err_model == true &&
        this.err_glass == true &&
        this.err_count == true
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
          phone
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
#make {
  margin-bottom: 5px;
  margin-top: 5px;
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
</style>