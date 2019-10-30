import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import plugins from './plugins'
import { auth } from './firebase'
import { SET_AUTH } from './store/mutations.type'

Vue.config.productionTip = false
Vue.use(plugins)

let app
auth.onAuthStateChanged(user => {
  if (user) store.commit(SET_AUTH, user)
  if (!app) {
    app = new Vue({
      store,
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})
