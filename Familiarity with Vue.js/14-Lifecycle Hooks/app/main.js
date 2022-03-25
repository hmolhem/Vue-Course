Vue.createApp({
    data(){
        return{
            title: 'Lifecycle hooks',
            name:'Hossein'
        }
    },

    methods:{
        updateName(){
            this.name = 'Hossein Molhem'
        }
    },
    beforeCreate(){
        console.log('Running before create')
    },
    created(){
        console.log('Running create')
    },
    beforeMount(){
        console.log('Running before mount')
    },
    mounted(){
        console.log('Running mount')
    },
    beforeUpdate(){
        console.log('Running before update')
    },
    updated(){
        console.log('Running update')
    }
}).mount('#app');