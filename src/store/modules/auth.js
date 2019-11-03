import authServices from '@/services/auth'
import { SIGN_IN_WITH_GOOGLE, SIGN_OUT } from '../actions.type'
import { SET_AUTH } from '../mutations.type'

const state = {
  user: null
}

const getters = {
  isAuthenticated(state) {
    return !!state.user
  }
}

const actions = {
  [SIGN_IN_WITH_GOOGLE]({ commit }) {
    return authServices.signInWithGoogle().then(user => {
      commit(SET_AUTH, user)
    })
  },
  [SIGN_OUT]({ commit }) {
    return authServices.signOut().then(() => commit(SET_AUTH, null))
  }
}

const mutations = {
  [SET_AUTH](state, user) {
    state.user = user
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
