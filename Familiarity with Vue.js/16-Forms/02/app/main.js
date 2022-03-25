Vue.createApp({
  data() {
    return {
      title: "Forms CheckBox",
      checkBox: [],
    };
  },
  methods: {
    sendCheck() {
      console.log(this.checkBox[0],this.checkBox[1]);
    },
  },
}).mount("#app");
