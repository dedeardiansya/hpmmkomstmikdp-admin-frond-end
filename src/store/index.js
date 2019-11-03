import Vue from 'vue'
import Vuex from 'vuex'
import AuthModule from './modules/auth'
import ConfigModule from './modules/config'
import BlogModule from './modules/blog'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    AuthModule,
    ConfigModule,
    BlogModule
  }
})
