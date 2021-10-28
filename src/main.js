import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store/store";
import modal from "./plugins/index";
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(modal)

new Vue({
  render: h => h(App),
  store,
  vuetify,
  router
}).$mount('#app')
