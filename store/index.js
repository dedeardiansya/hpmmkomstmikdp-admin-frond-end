export const state = () => ({
  auth: null
})

export const getters = {
  isLogin(state) {
    return !!state.auth
  },
  profile(state) {
    return state.auth
  }
}

export const mutations = {
  SET_AUTH(state, data) {
    state.auth = data
  }
}
