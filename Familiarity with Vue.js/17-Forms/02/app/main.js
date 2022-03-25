Vue.createApp({
    data(){
        return{
            title:'Listbox in vuejs',
            languages: ['PHP', 'C#', 'Javascrit', 'Python'],
            lang : []
        }
    },
    methods:{
        selectLang(){
            this.lang.forEach(element => {
                console.log(element);
            });
        }
    }
}).mount('#app');