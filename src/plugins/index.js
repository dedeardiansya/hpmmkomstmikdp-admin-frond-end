import GlobalComponents from './globalComponents'
import GlobalDirectives from './globalDirectives'
import { BootstrapVue } from 'bootstrap-vue'

//css assets
import '@/assets/fonts/montserrat/css/style.css'
import '@/assets/fonts/feather/style.css'
import '@/assets/scss/app.scss'

export default {
  install(Vue) {
    Vue.use(GlobalComponents)
    Vue.use(GlobalDirectives)
    Vue.use(BootstrapVue)
  }
}
