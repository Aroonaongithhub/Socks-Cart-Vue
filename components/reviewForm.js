app.component('review-form',{
    template:
    /*HTML*/
    `<form class="review-form" @submit.prevent="onSubmit">
    <!-- In order to submit the form, add a event listener -->
    <!-- .prevent=> moodifier that prevents the default browser refresh and will trigger the onSubmit method-->
    <h3>Your Review</h3>

    <label for="name">Name:</label>
    <input id="name" v-model="name">

    <label for="review">Review:</label>
    <textarea id="review" v-model="review"></textarea>

    <label for="rating" >Rating:</label>
    <!--number in v-model is the modifier that typcasts the value as number -->
    <select id="rating" v-model.number="rating">
    <option></option>
    <option></option>
    <option></option>
    <option></option>
    <option></option>
    </select>

    <input class="button" type="submit" value="Submit">
    </form>`,
    data(){
        return{
          name: '',
          review: '',
          rating: null  
        }
    },
    methods: {
        onSubmit(){
            if(this.name==''|| this.review==''|| this.rating==null ){
                alert('Review is incomplete, please fill each field.');
                return
            }
            const Review={
              name: this.name,
              review: this.review,
              rating: this.rating
            }
            // to emit response passing along productReview as the playload
            this.$emit('review-submitted',Review)
            // after submitting reset the page
            this.name='',
            this.review='',
            this.rating=null
        }
    }
})