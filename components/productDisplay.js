// creating a component for displaying the product
app.component('product-display',{
    props:{
      premium:{
        type: Boolean,
        required: true
      }
    },
    //Encapsulate Reusable code
  template:
  //ES6 feature 
 /*HTML*/
 `<div class="product-display">
 <div class="product-container">
   <div class="product-image">
      <img v-bind:src="image">
   </div>
   <div class="product-info">
     <h1>{{title}}</h1>
     <!-- conditional rendering -->
     <p v-if="inStock">In Stock</p>
     <p v-else>Out of Stock</p>
     <!-- to show free sshipping for premium customers  -->
     <p>Shipping: {{shipping}}</p>
     <!-- list rendering -->
     <ul>
       <li v-for="detail in details">{{detail}}</li>
     </ul>
     <!-- Event Handeling: mousover and click  -->
     <div v-for ="(variant ,index) in variances"
     :key="variant.id"
      @mouseover="updateVariant(index)"
      class="color-circle"
      :style="{backgroundColor:variant.color}"></div>
      <button class="button" v-on:click="addToCart"
      :class="{disabledButton: !inStock}" :disabled="!inStock">Add To Cart</button>
      <button class="button" v-on:click="remFromCart"
      :class="{disabledButton: !inStock}" :disabled="!inStock">Remove From Cart</button>
   </div>
 </div>
 <review-list v-if="reviews.length" :reviews="reviews"></review-list>
 <review-form @review-submitted="addReview"></review-form>
</div>`,
data(){
    return {
        product:'Socks',
        brand:'Vue Mastery',
        selectedVariant:0,
        details: ['50% cotton', '30% wool','20% polyester'],
        variances: [
            {id: 2234, color:'green',image: './assets/images/socks_green.jpg',quantity: 50},
            {id: 2235, color: 'blue',image: './assets/images/socks_blue.jpg', quantity: 0},
        ],
        reviews:[]
    }
},
methods: {
    addToCart(){
        this.$emit('add-to-cart', this.variances[this.selectedVariant].id)
    },
    remFromCart(){
      this.$emit('rem-from-cart')
    },
    updateVariant(index){
      this.selectedVariant=index   
    },
    addReview(review){
      this.reviews.push(review)
    }
},

computed:{
    title(){
        return this.brand +" "+ this.product
    },
    image(){
        return this.variances[this.selectedVariant].image
    },
    inStock(){
        return this.variances[this.selectedVariant].quantity
    },
    shipping(){
        if (this.premium){
            return 'Free'
        }
        return 2.99
    }
}
})
