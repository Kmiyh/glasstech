<template>
  <div id="header" class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 border-bottom shadow-sm">
    <h5 id="name" class="my-0 mr-md-auto font-weight-normal">{{sitename}}</h5>
    <nav id="menu" class="my-2 my-md-0 mr-md-3">
      <a class="p-2" href="#">Главная</a>
      <a class="p-2" href="#">Продукты</a>
      <a class="p-2" href="#">Новости</a>
      <a class="p-2" href="#">Контакты</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: "my-header",
  data() {
    return {
      sitename: "GlassTech"
    };
  }
};
</script>

<style scoped>
#header {
  background-color: #3b5998;
  margin-bottom: 0px !important;
  border-bottom: 0px !important;
}
#name {
  font-size: 36px;
  font: bold;
  color: white;
}
#menu {
  font-size: 20px;
}
#menu > a {
  color: white;
}
</style>