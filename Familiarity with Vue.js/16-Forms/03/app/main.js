Vue.createApp({
  data() {
    return {
      title: "Forms Radio Button",
      radioSelect: '',
    };
  },
  methods: {
    sendCheck() {
      console.log(this.radioSelect);
    },
  },
}).mount("#app");
