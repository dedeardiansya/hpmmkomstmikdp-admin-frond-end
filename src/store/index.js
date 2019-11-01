import Vue from 'vue'
import Vuex from 'vuex'
import AuthModule from './modules/auth'
import ConfigModule from './modules/config'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    AuthModule,
    ConfigModule
  }
})
