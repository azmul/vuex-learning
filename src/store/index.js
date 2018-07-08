import Vue from 'vue';
import Vuex from 'vuex';
import {STORE_PRODUCTS} from './mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{ // = data
        products:[]
    },
    getters:{ // = computed properties
        availableProducts: state =>{
            return state.products.filter(product => product.inventory > 0);
        }
    },
    mutations:{ // setting and updating state
        [STORE_PRODUCTS](state, products){
           state.products = products;
        }
    },
    actions:{ // = make the call
        [STORE_PRODUCTS](context,products){
           context.commit(STORE_PRODUCTS,products);
        }
    }
})