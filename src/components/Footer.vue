<template>
<div class="f">
    <div id="footer" class="container">
      <div class="row"></div>
          <div class="ftr">
            <a class="fb-ic" style="padding-left: 40px;">
              <i class="fa fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
            </a>
            <a class="tw-ic">
              <i class="fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
            </a>
            <a class="ins-ic">
              <i class="fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
            </a>
          </div>
        </div>
  </div>
  </footer>
</template>

<script>
export default {
  name: "my-footer",
  data() {
    return {};
  }
};
</script>

<style scope>
@import url('https://fonts.googleapis.com/css?family=Montserrat:300|Poiret+One|Roboto&display=swap');
#footer {
  padding-bottom: 20px !important;
  padding-top: 20px !important;
  text-align: center;
}
.f {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
i:hover {
  color: #f1890b;
}
.container {
  min-height: 40px;
}
.ftr {
  color: #3b5998;
}
</style>