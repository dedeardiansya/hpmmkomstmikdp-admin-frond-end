import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Plugins from './plugins'
import { auth } from './firebase'
import { SET_AUTH } from './store/mutation.types'

Vue.use(Plugins)

Vue.config.productionTip = false

const check = auth.onAuthStateChanged((user) => {
  if (user) store.commit(SET_AUTH, user)
  new Vue({
    router,
    store,
    render: (h) => h(App)
  }).$mount('#app')
  check()
})
