import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store'

Vue.config.productionTip = true
Vue.config.devtools = true

Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store: store
})
