<template>
  <div>
    <my-header></my-header>
    <main>
      <div class="container">
        <h1>Наши контакты</h1>
        <div class="row centered">
          <div class="col-md-5">
            <p>
              <strong>Телефон</strong>: 88005553535
              <br />
              <strong>Email</strong>: glasstech@gmail.com
              <br />
              <strong>Адрес</strong>: г.Орел, ул.Пушккина, д.35
            </p>
          </div>
          <div class="card col-md-7">
            <form action>
              <h3>Cвяжитесь с нами</h3>
              <div class="form-group col-md-12">
                <label for="inputName">Имя</label>
                <input type="text" class="form-control" id="inputName" />
                <small>Укажите адрес</small>
              </div>
              <div class="form-group col-md-12">
                <label for="inputSurname">Фамилия</label>
                <input type="text" class="form-control" id="inputSurname" />
                <small>Укажите адрес</small>
              </div>
              <div class="form-group col-md-12">
                <label for="inputQuestion">Тема сообщения</label>
                <select id="inputQuestion" class="form-control">
                  <option v-for="model in models">{{model.name}}</option>
                </select>
                <small>Укажите модель телефона</small>
              </div>
              <div class="form-group col-md-12">
                <label for="inputQuestion">Текст сообщения</label>
                <textarea cols="48" rows="5"></textarea>
              </div>
            </form>
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
export default {
  name: "Contacts",
  data() {
    return {};
  },
  components: { MyHeader, MyFooter }
};
</script>

<style scoped>
.card {
  margin-bottom: 10px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.5);
  max-width: 550px;
}
</style>