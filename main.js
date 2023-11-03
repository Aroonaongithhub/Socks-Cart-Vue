const app= Vue.createApp({
    data(){
        return{
            cart:[],
            premium: true
        }
    },
    methods: {
        incCart(id){
            this.cart.push(id)
        },
        decCart(id){
            this.cart.pop(id)
        }
    }
    
})
