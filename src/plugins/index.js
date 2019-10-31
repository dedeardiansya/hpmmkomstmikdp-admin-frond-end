import '@/assets/fonts/simple-line-icons/css/simple-line-icons.css'
import '@/assets/fonts/poppins/css/poppins.css'
import '@/assets/scss/app.scss'

import BootstrapVue from 'bootstrap-vue'
import globalDirectives from './globalDirectives'
import globalComponents from './globalComponents'
import sidebar from './sidebar'
import BlockUI from 'vue-blockui'
import VueSweetalert2 from 'vue-sweetalert2'
import SvgIcon from './svgIcon'

export default {
  install(Vue) {
    Vue.use(BootstrapVue)
    Vue.use(globalDirectives)
    Vue.use(globalComponents)
    Vue.use(sidebar)
    Vue.use(BlockUI)
    Vue.use(VueSweetalert2)
    Vue.use(SvgIcon)
  }
}
