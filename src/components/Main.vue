<template>
  <div>
    <my-header></my-header>
    <main>
      <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 class="display-4">{{head}}</h1>
        <p class="lead">{{description}}</p>
      </div>
    </main>
  </div>
</template>

<script>
import MyHeader from "./Header.vue";
export default {
  name: "imain",
  data() {
    return {
      head: "Pricing",
      description:
        "Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization."
    };
  },
  components: { MyHeader }
};
</script>