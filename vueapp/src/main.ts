import Vue from 'vue'
import App from './App.vue'
import router from './plugins/router'
import store from './plugins/store/vuex'
import vuetify from './plugins/vuetify';
import i18n from './plugins/i18n'
import InversifyPlugin from './plugins/inversify/inversify';

Vue.config.productionTip = false

Vue.use(InversifyPlugin);

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
