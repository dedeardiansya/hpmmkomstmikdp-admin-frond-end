import { auth, googleProvider } from '../firebase'
import localConfig from '~/config'

export const strict = false

export const state = () => ({
  auth: null,
  config: localConfig
})

export const getters = {
  isLogin(state) {
    return !!state.auth
  },
  profile(state) {
    return state.auth
  },
  config(state) {
    return state.config
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
  },
  FETCH_SERVER_CONFIG({ commit }) {
    return new Promise(async (resolve, reject) => {
      try {
        const config = (await this.$axios.$get('/config')).config
        commit('SET_CONFIG', config)
        resolve(config)
      } catch (e) {
        if (e.response) e.message = e.response.data.message
        reject(e)
      }
    })
  }
}

export const mutations = {
  SET_AUTH(state, data) {
    state.auth = data
  },
  SET_CONFIG(state, serverConfig) {
    state.config = { ...localConfig, ...serverConfig }
  }
}
