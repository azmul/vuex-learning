<template>
  <div class="product-list">
      <h1>Product List</h1>
      <ul>
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
      products:[]
    }
  },
  created(){
    axios.get('/products').then(response=>{
      if(response.status === 200){
        this.$store.dispatch(STORE_PRODUCTS,response.data);
        this.products = response.data;
      }    
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
