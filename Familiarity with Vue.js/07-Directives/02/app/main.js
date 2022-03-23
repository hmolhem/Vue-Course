Vue.createApp({
    data(){
        return{
            title: 'v-for',
            number: 12,
            names:['حسین','مریم','شهریار'],
            list:[
                {name:'حسین',age:52},
                {name:'مریم',age:51},
                {name:'شهریار',age:19}
            ],
            space: ' '
            
        }
    }
}).mount('#app');