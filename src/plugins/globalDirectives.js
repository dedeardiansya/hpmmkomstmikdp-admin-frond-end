import clickOutside from '@/directives/click-ouside'

export default {
  install(Vue) {
    Vue.directive('click-outside', clickOutside)
  }
}
