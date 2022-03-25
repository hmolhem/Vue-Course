<template>
  <HelloWorld />
  <p v-text="name"></p>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return{
      name: 'Hossein Molhem'
    }
  }
}
</script>

<style>
p{
  text-align: center;
  background-color: blue;
  color: aliceblue;
  padding: 10px 0px;
  font-size: 20px;
  font-weight: bolder;
}
</style>
