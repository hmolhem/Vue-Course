<template>
  <section>
    <TitleOfSubject />
    <HumanInfo @sendDataInfo="showData($event)"/>
    <div>
      <span v-text="dataInfo.firstName"></span>
      <span v-text="dataInfo.lastName"></span>
    </div>
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
  data(){
    return{
      dataInfo:{
        firstName:'Hossein',
        lastName: 'Molhem'
      }
    }
  },
  methods:{
    showData(event){
      this.dataInfo = event;
    }
  }
};
</script>

<style scoped>
div {
  background-color: rgb(184, 123, 123);
  color: aliceblue;
  font-size: 20px;
  font-weight: bold;
  border-radius: 5px;
  text-align: center;
  padding: 10px;
}
span {
  display: block;
}
</style>
