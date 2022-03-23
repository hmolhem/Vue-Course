Vue.createApp({
    data(){
        return{
            title: 'v-on',
            name: 'حسین'
        }
    },
    methods:{
        updateName(){
            this.name = 'شهریار'
        }
    }
}).mount('#app');