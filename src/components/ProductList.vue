<template>
  <div class="product-list">
      <h1>Product List</h1>
      <img 
          v-if="loading"
          src="https://www.looktotheright.com/wp-content/uploads/2015/12/spinner.gif" 
          alt="Spinner">
      <ul v-else>
        <li v-for="(product,index) in products" :key="index">
          {{product.title}}
        </li>
      </ul>
  </div>
</template>

<script>
import axios from 'axios';
import {STORE_PRODUCTS} from '../store/mutation-types';

export default {
  name: 'ProductList',
  props: {
    
  },
  data(){
    return{
       loading: false
    }
  },
  computed:{
    products(){
      return this.$store.getters.availableProducts;
    }
  },
  created(){
    this.loading = true;
    axios.get('/products').then(response=>{
      if(response.status === 200){
        this.loading = false;
        this.$store.dispatch(STORE_PRODUCTS,response.data);
      }    
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
