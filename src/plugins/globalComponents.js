import Vuetable from 'vuetable-2'
import AppContent from '@/components/AppContent'
import AppPanel from '@/components/AppPanel'

const GlobalComponents = {
  install(Vue) {
    Vue.component('Vuetable', Vuetable)
    Vue.component('AppContent', AppContent)
    Vue.component('AppPanel', AppPanel)
  }
}

export default GlobalComponents
