Vue.createApp({
    data(){
        return{
            title: '‌اضافه کردن کلاس و استایل در ویو‌جی‌اس',
            newStyle:{
                backgroundColor: 'blue',
                color: 'white',
                display: 'inline-block',
                padding: '5px',
                borderRadius: '5px',
            },
        }
    },
    methods:{
        changeStyle(){
            console.log(style)
        }
    }
}).mount('#app');