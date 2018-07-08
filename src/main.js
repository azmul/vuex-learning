import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import store from './store/index';

axios.defaults.baseURL = 'http://localhost:3004/';

Vue.config.productionTip = false

new Vue({
  store: store,
  render: h => h(App)
}).$mount('#app')
