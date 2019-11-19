import { auth, googleProvider } from '../firebase'
export const strict = false
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

export const actions = {
  LOGIN({ commit }) {
    return new Promise((resolve, reject) =>
      auth
        .signInWithPopup(googleProvider)
        .then(() => auth.currentUser.getIdToken())
        .then(token => {
          this.$axios.setToken(token, 'Bearer')
          return this.$axios.$get('/admin/user/profile')
        })
        .then(() => {
          commit('SET_AUTH', auth.currentUser)
          resolve()
        })
        .catch(e => {
          auth.signOut()
          if (e.response) e.message = e.response.data.message
          reject(e)
        })
    )
  },
  async SIGN_OUT({ commit }) {
    await auth.signOut()
    commit('SET_AUTH', null)
  }
}

export const mutations = {
  SET_AUTH(state, data) {
    state.auth = data
  }
}
