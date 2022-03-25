Vue.createApp({
    data(){
        return{
            title: 'Form dara: text & textarea',
            card:{
                name: '',
                sureName: '',
                message: ''
            }
        }
    },
    methods:{
        submitForm(){
            console.log(this.card.name, this.card.sureName, this.card.message);
        }
    }
}).mount('#app');