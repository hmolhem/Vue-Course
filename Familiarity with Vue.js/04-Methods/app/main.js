Vue.createApp({
    data(){
        return{
            msg: 'Hello world!',
            card: {
                id: '0056216671',
                name: 'Hossein',
                sureName: 'Molhem'
            },
            Boolean: true
        }
    },
    methods:{
        welcome(){
            return this.msg;
        },
        specification(){
            return this.card.name + ' ' + this.card.sureName;
        }
    }
}).mount('#app');