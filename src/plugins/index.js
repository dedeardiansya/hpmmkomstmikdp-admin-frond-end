import '@/assets/fonts/iconsmind/style.css'
import '@/assets/fonts/iconsmind-s/css/iconsminds.css'
import '@/assets/fonts/simple-line-icons/css/simple-line-icons.css'
import '@/assets/fonts/poppins/css/poppins.css'
import '@/assets/scss/app.scss'

import BootstrapVue from 'bootstrap-vue'
import globalDirectives from './globalDirectives'
import globalComponents from './globalComponents'
import Sidebar from '@/components/Sidebar'

export default {
  install(Vue) {
    Vue.use(BootstrapVue)
    Vue.use(globalDirectives)
    Vue.use(globalComponents)
    Vue.use(Sidebar)
  }
}
