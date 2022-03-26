<template>
  <section>
    <TitleOfSubject />
    <HumanInfo :first-name="firstName" :last-name="lastName" :id-card="idCard" />
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
      firstName: "Hossein",
      lastName: "Molhem",
      idCard: 12345,
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
