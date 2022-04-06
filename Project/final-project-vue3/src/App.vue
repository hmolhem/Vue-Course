<template>
  <diV>
    <HeaderMenu />
    <router-view></router-view>
  </diV>
</template>

<script>
import HeaderMenu from "./components/HeaderMenu.vue";
export default {
  name: "App",
  components: {
    HeaderMenu,
  },
};
</script>

<style>
</style>
