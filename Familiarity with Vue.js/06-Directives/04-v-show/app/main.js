Vue.createApp({
    data(){
        return{
            title: 'v-show',
            number: 10,
            msg1: 'سلام دنیا!',
            msg2: 'نا برده رنج گنج میسر نمی شود',
            msg3: 'من عاشق فریمورک ویو جی‌اس هستم.',
            isOk: true,
            msg4: 'نمایش می‌دهد',
            msg5: 'استفاده از متدها در v-if'
        }
    },
    methods:{
        display(){
            return this.number==10 ? true : false
        }
    }
}).mount('#app');