Vue.createApp({
    data(){
        return{
            title: '‌Computed and Watch',
            name:'',
            active: false
        }
    },
    watch:{
        active(value){
            console.log(value);
            // watch active value when it change dispaly it
        }
    },
    computed:{
        isActive(){
            console.log('calling isActive');
            return this.active ? 'Active':'Not Active';
        }
    },

    methods:{
        toggleActive(){
            this.active = !this.active
        },
        // isActive(){
        //     console.log('calling isActive');
        //     return this.active ? 'Active':'Not Active';
        // },
        upperCase(){
            console.log('calling upperCase');
            return this.name.toUpperCase();
        }
    }
}).mount('#app');