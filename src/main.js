import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import plugins from './plugins'
import { auth } from './firebase'
import { FETCH_SERVER_CONFIG } from './store/actions.type'
import { SET_AUTH } from './store/mutations.type'

Vue.config.productionTip = false
Vue.use(plugins)

const app = auth.onAuthStateChanged(async user => {
  if (user) store.commit(SET_AUTH, user)
  try {
    await store.dispatch(FETCH_SERVER_CONFIG)
  } catch (e) {
    console.log(e)
  }
  new Vue({
    store,
    router,
    render: h => h(App)
  }).$mount('#app')
  app()
})
