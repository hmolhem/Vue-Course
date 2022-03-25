Vue.createApp({
    data(){
        return{
            title:'Listbox in vuejs',
            languages: ['PHP', 'C#', 'Javascrit', 'Python'],
            lang : 'C#'
        }
    },
    methods:{
        selectLang(){
            console.log(this.lang);
        }
    }
}).mount('#app');