import 'perfect-scrollbar/css/perfect-scrollbar.css'
import 'socicon/css/socicon.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '@/assets/fonts/flaticon/flaticon.css'
import '@/assets/fonts/flaticon2/flaticon.css'
import '@/assets/fonts/line-awesome/css/line-awesome.css'
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
