Vue.createApp({
    data(){
        return{
            title: 'v-on',
            name: 'حسین'
        }
    },
    methods:{
        updateName(event){
            this.name = event.type;
            console.log(event)
        }
    }
}).mount('#app');