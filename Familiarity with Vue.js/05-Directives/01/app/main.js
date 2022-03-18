Vue.createApp({
    data(){
        return{
            msg: 'به کمک دایرکتیوها می‌توان با سند تعامل بر قرار کرد.',
            msg1: 'برای مشاهده لیست دایرکتیوها در سایت vue.js به منوی API بروید',
            vueSite: 'https://vuejs.org/api/',
            msg2: 'می‌توانید لیست دایرکتیوها را در بخش Built-ins از این صفحه مشاهده کنید',
            builtInsDirective:{
                1:'v-text',
                2:'v-html',
                3:'v-show',
                4:'v-if',
                5:'v-else',
                6:'v-else-if',
                7:'v-for',
                8:'v-on',
                9:'v-bind',
                10:'v-model',
                11:'v-slot',
                12:'v-pre',
                13:'v-once',
                14:'v-memo',
                15:'v-cloak'
            },
        }
    },
    methdos:{

    }
}).mount('#app');