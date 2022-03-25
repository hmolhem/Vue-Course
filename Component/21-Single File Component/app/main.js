import Home from '../components/Home.vue';

Vue.createApp({
    components:{
        Home
    },
    template: `
        <Home />
        <h3 v-text="question"></h3>
        <span v-text="answer"></span>

    `,
    data(){
        return{
            question: 'How to create component in vuejs?',
            answer: 'It is easy.'
        }
    } 
}).mount('#app');