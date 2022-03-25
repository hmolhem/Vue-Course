Vue.createApp({
    data(){
        return{
            title:'Forms CheckBox',
            flag:{
                chechBox01 : true,
                chechBox02 : false,
            }
        }
    },
    methods:{
        sendCheck(){
            console.log(this.flag.chechBox01, this.flag.chechBox02);
            console.log(this.flag);
            
        }
    }
}).mount('#app');