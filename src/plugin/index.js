import '@/assets/fonts/poppins/css/poppins.css'
import '@/assets/fonts/ionicon/css/ionicons.css'
import '@/assets/scss/app.scss'

import globalDirectives from './globalDirectives'
import globalMixins from './globalMixins'
import globalComponents from './globalComponents'
import BootstrapVue from 'bootstrap-vue'

function Install(Vue) {
  Vue.use(globalDirectives)
  Vue.use(globalMixins)
  Vue.use(globalComponents)
  Vue.use(BootstrapVue)
}

export default Install
