import { auth, googleProvider } from '../../firebase'
import { SIGN_IN_WITH_GOOGLE } from '../actions.type'
import { SET_AUTH } from '../mutations.type'

const state = {
  user: null
}

const getters = {}

const actions = {
  [SIGN_IN_WITH_GOOGLE]({ commit }) {
    return new Promise((resolve, reject) => {
      auth
        .signInWithPopup(googleProvider)
        .then(result => {
          commit(SET_AUTH, auth.currentUser)
          resolve(result)
        })
        .catch(e => {
          reject(e)
        })
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
