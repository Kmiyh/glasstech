<template>
  <footer class="page-footer font-small cyan darken-3">
    <div class="container">
      <div class="row">
        <div id="footer" class="col-md-12">
          <div class="ftr">
            <!-- Facebook -->
            <a class="fb-ic">
              <i class="fa fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
            </a>
            <!-- Twitter -->
            <a class="tw-ic">
              <i class="fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
            </a>
            <!--Instagram-->
            <a class="ins-ic">
              <i class="fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
            </a>
            <!-- <p>&copy; Copyright: Pavel Galiguzov</p> -->
          </div>
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
#footer {
  padding-bottom: 20px !important;
  padding-top: 20px !important;
  text-align: center;
}
.container {
  min-height: 40px;
}
.ftr {
  color: #3b5998;
}
</style>