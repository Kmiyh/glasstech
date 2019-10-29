<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">{{sitename}}</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">
            Главная
            <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Продукты</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Новости</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Контакты</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input
          class="sr form-control mr-sm-2"
          type="search"
          placeholder="Искать"
          aria-label="Search"
        />
        <button class="sr btn btn-primary btn-md" type="submit">Поиск</button>
      </form>
    </div>
  </nav>
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
nav {
  position: sticky;
  top: 0;
}
.sr {
  margin-bottom: 5px;
}
.navbar-brand {
  font-size: 36px;
  color: #3b5998;
  padding-bottom: 7px !important;
}
a {
  color: #3b5998 !important;
  padding-bottom: 0px !important;
  font-size: 24px;
}
li {
  padding-bottom: 0px;
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