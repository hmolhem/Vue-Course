Vue.createApp({
    template:`
    <h1 v-text="title"></h1>
    <p>Hossein Molhem</p>
    `,
    data(){
        return{
            title: 'Template in vue js'
        }
    }
}).mount('#app');