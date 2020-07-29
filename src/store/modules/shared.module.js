import { SET_ERROR, CLEAR_ERROR, SET_LOADING } from '../mutation.types'

const state = () => ({
  loading: false,
  error: null
})

const getters = {
  loading(state) {
    return state.loading
  },
  error(state) {
    return state.error
  }
}

const actions = {}

const mutations = {
  [SET_LOADING](state, payload) {
    state.loading = payload
  },
  [SET_ERROR](state, payload) {
    state.error = payload
  },
  [CLEAR_ERROR](state) {
    state.error = null
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
