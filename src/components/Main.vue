<template>
  <div>
    <my-header></my-header>
    <main>
      <!-- <section id="image"></section> -->
      <section class="gray">
        <div class="container">
          <h1 v-html="first"></h1>
          <div class="row centered">
            <div id="info" class="font">
              {{ff}}
              <br />
              <button class="order btn btn-warning btn-lg">{{button}}</button>
            </div>
            <div id="image2"></div>
          </div>
        </div>
      </section>
      <section>
        <div id="advantages" class="container">
          <h1 class="second">{{second}}</h1>
          <div class="row">
            <div class="font">
              <h3>{{sf}}</h3>
              <p>{{sff}}</p>
              <i class="fa fa-trophy"></i>
            </div>
            <div class="font">
              <h3>{{ss}}</h3>
              <p>{{ssf}}</p>
              <i class="fa fa-trophy"></i>
            </div>
            <div class="font">
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
        <div class="container">
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
        <div class="container">
          <h1>{{fourth}}</h1>
          <h5>{{fs}}</h5>
          <div>
            <button class="order btn btn-warning btn-lg">{{button}}</button>
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
    </main>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from "./Header.vue";
import MyFooter from "./Footer.vue";
export default {
  name: "imain",
  data() {
    return {
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
  components: { MyHeader, MyFooter }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:300|Poiret+One|Roboto&display=swap");
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
  text-align: left;
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