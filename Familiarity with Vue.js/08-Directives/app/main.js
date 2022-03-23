Vue.createApp({
    data(){
        return{
            title: 'v-once',
            name: 'حسین'
        }
    },
    methods:{
        updateName(){
            setTimeout(()=>{
                this.name = 'شهریار'
            },2000)
        }
    }
}).mount('#app');