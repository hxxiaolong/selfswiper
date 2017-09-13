import Vue from 'vue';
import App from './App';
import router from './router';
import vueLazyload from 'vue-lazyload';

Vue.config.productionTip = false;
Vue.use(vueLazyload);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
