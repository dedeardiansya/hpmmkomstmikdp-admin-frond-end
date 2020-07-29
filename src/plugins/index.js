import GlobalComponents from './globalComponents'
import GlobalDirectives from './globalDirectives'
import { BootstrapVue } from 'bootstrap-vue'
import { firestorePlugin } from 'vuefire'

//css assets
import '@/assets/fonts/raleway/style.css'
import '@/assets/fonts/feather/style.css'
import '@/assets/scss/app.scss'

export default {
  install(Vue) {
    Vue.use(GlobalComponents)
    Vue.use(GlobalDirectives)
    Vue.use(BootstrapVue)
    Vue.use(firestorePlugin)
  }
}
