import SvgIconGoogle from '../components/svgIcons/google'
import SvgIconEqualizer from '../components/svgIcons/equalizer'
import SvgIconAngleDoubleLeft from '../components/svgIcons/angleDoubleLeft'
import SvgIconAngleDoubleRight from '../components/svgIcons/angleDoubleRight'

export default {
  install(Vue) {
    Vue.component('SvgIconGoogle', SvgIconGoogle)
    Vue.component('SvgIconEqualizer', SvgIconEqualizer)
    Vue.component('SvgIconAngleDoubleLeft', SvgIconAngleDoubleLeft)
    Vue.component('SvgIconAngleDoubleRight', SvgIconAngleDoubleRight)
  }
}
