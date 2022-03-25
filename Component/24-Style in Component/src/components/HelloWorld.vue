<template>
    <h1 v-text="title"></h1>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      title: 'This is a first vue CLI project'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  background-color: red;
  color: aliceblue;
  padding: 15px 0px;
  border-radius: 5px;
  text-align: center;
}
</style>
