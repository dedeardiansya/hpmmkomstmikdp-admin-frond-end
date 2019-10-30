import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import plugins from './plugins'

Vue.config.productionTip = false
Vue.use(plugins)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
