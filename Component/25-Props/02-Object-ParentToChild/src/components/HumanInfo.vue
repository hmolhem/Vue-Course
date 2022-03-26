<template>
  <div>
    <span v-text="userInfo.firstName"></span>
    <span v-text="userInfo.lastName"></span>
    <span v-text="userInfo.idCard"></span>
  </div>
</template>

<script>
export default {
  name: "HumanInfo",
  props: {
    userInfo: Object
  }
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
span {
  display: block;
}
</style>