<template>
  <div>
    <my-header></my-header>
    <main>
      <section>
        <div id="image"></div>
      </section>
      <section>
        <div class="container">
          <h1 v-html="first"></h1>
          <div class="row centered">
            <div id="info">
              {{ff}}
              <br />
              <button id="order" class="btn btn-warning btn-lg">{{button}}</button>
            </div>
            <div id="image2"></div>
          </div>
        </div>
      </section>
      <section class="gray">
        <div class="container">
          <h1>{{second}}</h1>
          <div id="advantages" class="row centered">
            <div>
              <h3>{{sf}}</h3>
            </div>
            <div>
              <h3>{{ss}}</h3>
            </div>
            <div>
              <h3>{{st}}</h3>
            </div>
          </div>
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
      first: "ЗАЩИТНЫЕ СТЕКЛА ДЛЯ<br>МОБИЛЬНЫХ ТЕЛЕФОНОВ",
      ff:
        'Наша компания занимается оптовой продажей защитных стекол для смартфонов по всей России. У нас Вы можете выбрать защитное стекло для следующих марок смартфонов: Apple, Sony, Samsung, Xiaomi, Huawei, Lenovo, Meizu, Nokia, Microsoft, Alcatel, HTC, ASUS. Также в продаже имеются стекла к Apple iWatch и Apple iPad. Мы гарантируем высокое качество защитных стекол и самые низкие цены на них. Оформите заказ в несколько шагов, нажав «Сделать Заказ»."',
      second: "Наши преимущества",
      sf: "Собственное производство",
      ss: "Мониторинг рынка",
      st: "Самые низкие цены",
      sff:
        "­­Реализуемые нами защитные стекла производятся на собственной фабрике! Мы не сотрудничаем с поставщиками стекол, потому что можем гарантировать качество только выпущенной нами продукции. Доверие клиентов – то, чем мы очень дорожим.",
      ssf:
        "Мы в курсе всех тенденций на рынке мобильных устройств! Смартфонам с самыми хрупкими экранами – самые надежные защитные стекла.",
      stf:
        "Мы гарантируем не только высокое качество продукции, но и самые низкие цены на защитные стекла. Цена товара Вас приятно удивит!­­ ",
      third: "Виды защитных стекол",
      fourth: "Понравилось?"
    };
  },
  components: { MyHeader, MyFooter }
};
</script>

<style scoped>
#image {
  background-image: url("../../static/image/main.jpg");
  background-position: center;
  min-height: 680px;
  width: 100%;
}
#image2 {
  background-image: url("../../static/image/zxc.png");
  min-height: 655px;
  min-width: 635px;
  margin-bottom: 10px;
}
.container {
  text-align: center;
  padding-top: 20px;
}
.gray {
  background-color: #dddddd;
}
#info {
  padding-top: 100px;
  text-align: left;
  max-width: 500px;
  font-size: 20px;
}
#order {
  text-align: left;
  margin-top: 10px;
  margin-bottom: 20px;
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