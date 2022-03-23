Vue.createApp({
    data(){
        return{
            title: 'v-on',
            name: 'حسین'
        }
    },
    methods:{
        updateName(name){
            this.name = name
        }
    }
}).mount('#app');