import { auth } from '../../firebase'
import { LOGIN } from '../action.types'
import { LOGOUT } from '../action.types'
import {
  SET_AUTH,
  SET_ERROR,
  SET_LOADING,
  CLEAR_ERROR
} from '../mutation.types'

const state = () => ({
  auth: null
})

const getters = {
  auth(state) {
    return state.auth
  }
}

const actions = {
  [LOGIN]({ commit }, payload) {
    commit(SET_LOADING, true)
    commit(CLEAR_ERROR)
    auth
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then((user) => {
        commit(SET_LOADING, false)
        commit(SET_AUTH, user)
      })
      .catch((error) => {
        commit(SET_LOADING, false)
        commit(SET_ERROR, error)
      })
  },
  [LOGOUT]({ commit }) {
    commit(SET_LOADING, true)
    commit(CLEAR_ERROR)
    auth
      .signOut()
      .then(() => {
        commit(SET_LOADING, false)
        commit(SET_AUTH, null)
      })
      .catch((error) => {
        commit(SET_LOADING, false)
        commit(SET_ERROR, error)
      })
  }
}

const mutations = {
  [SET_AUTH](state, payload) {
    state.auth = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
