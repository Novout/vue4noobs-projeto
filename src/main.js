import Vue from 'vue';
import Vuelidate from 'vuelidate';
import VueAWN from 'vue-awesome-notifications';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './plugins/vuerouter';
import store from './store';

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(VueAWN, {});
new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
