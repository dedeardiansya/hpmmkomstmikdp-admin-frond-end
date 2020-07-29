import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations } from 'vuexfire'

import auth from './modules/auth.module'
import shared from './modules/shared.module'

Vue.use(Vuex)

export default new Vuex.Store({
  mutations: {
    ...vuexfireMutations
  },
  modules: { auth, shared }
})
