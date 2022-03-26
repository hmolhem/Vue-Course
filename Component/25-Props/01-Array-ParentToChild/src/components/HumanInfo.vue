<template>
  <div>
    <span v-text="firstName"></span>
    <span v-text="lastName"></span>
    <span v-text="idCard"></span>
  </div>
</template>

<script>
export default {
  name: 'HumanInfo',
  props: ['firstName', 'lastName', 'idCard']
};
</script>

<style scoped>
div {
  background-color: blue;
  color: aliceblue;
  font-size: 20px;
  font-weight: bold;
  border-radius: 5px;
  text-align: center;
  padding: 10px;
}
span{
  display: block;
}
</style>