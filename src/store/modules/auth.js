import { auth, googleProvider } from '../../firebase'
import authService from '../../services/auth'
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
    return new Promise((resolve, reject) => {
      auth
        .signInWithPopup(googleProvider)
        .then(() => authService.isAdmin())
        .then(() => {
          resolve(auth.currentUser)
          commit(SET_AUTH, auth.currentUser)
        })
        .catch(e => {
          auth.signOut()
          reject(e)
        })
    })
  },
  [SIGN_OUT]({ commit }) {
    return auth.signOut().then(() => {
      commit(SET_AUTH, null)
      return true
    })
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
