import '@/assets/fonts/poppins/css/poppins.css'
import '@/assets/fonts/ionicon/css/ionicons.css'
import '@/assets/scss/app.scss'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'

import globalDirectives from './globalDirectives'
import globalMixins from './globalMixins'
import globalComponents from './globalComponents'
import BootstrapVue from 'bootstrap-vue'
import PerfectScrollbar from 'vue2-perfect-scrollbar'

function Install(Vue) {
  Vue.use(globalDirectives)
  Vue.use(globalMixins)
  Vue.use(globalComponents)
  Vue.use(BootstrapVue)
  Vue.use(PerfectScrollbar)
}

export default Install
