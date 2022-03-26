<template>
  <section>
    <TitleOfSubject />
    <HumanInfo :user-info="userInfo" />
  </section>
</template>

<script>
import TitleOfSubject from "./components/TitleOfSubject.vue";
import HumanInfo from "./components/HumanInfo.vue";

export default {
  name: "App",
  components: {
    TitleOfSubject,
    HumanInfo,
  },
  data() {
    return {
      userInfo:{
        firstName: "Hossein",
        lastName: "Molhem",
        idCard: 12345,
      }
    };
  },
};
</script>

<style>
p {
  text-align: center;
  background-color: blue;
  color: aliceblue;
  padding: 10px 0px;
  font-size: 20px;
  font-weight: bolder;
}
</style>
