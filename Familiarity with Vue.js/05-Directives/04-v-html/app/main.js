Vue.createApp({
    data(){
        return{
            title: 'v-html',
            insertSpan: '<span>Hello world</span>',
            msg: 'سلام دنیا'
        }
    }
}).mount('#app');