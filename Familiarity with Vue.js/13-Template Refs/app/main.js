Vue.createApp({
    data(){
        return{
            title: '‌Tamplate refs',
        }
    },

    methods:{
        getTag(){
            console.log(this.$refs);
            console.log(this.$refs.h3Tag);
            this.$refs.h3Tag.style.color = 'red';
            this.$refs.h3Tag.style.fontSize = '30px';
        }
    }
}).mount('#app');