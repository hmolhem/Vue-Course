<template>
  <div>
    <form>
      <label>First Name: </label>
      <input type="text" v-model="userInfo.firstName" />

      <label>Last Name: </label>
      <input type="text" v-model="userInfo.lastName" />

      <button type="submit" @click.prevent="sendData()">Send data</button>
    </form>
    <!-- <div>
      <p v-text="userInfo.firsName"></p>
      <p v-text="userInfo.lastName"></p>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "HumanInfo",
  data() {
    return {
      userInfo: {
        firstName: "",
        lastName: "",
      },
    };
  },
  methods: {
    sendData() {
      this.$emit("sendDataInfo", this.userInfo);
    },
  },
};
</script>

<style scoped>
div {
  margin: 10px 0;
  padding: 10px 0;
}
label {
  margin-left: 10px;
}
button {
  margin-left: 10px;
}
</style>