import Index from '@/index.vue';
import router from '@/router';
import store from '@/store/index';
import Vue from 'vue';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(Index)
}).$mount('#app');
