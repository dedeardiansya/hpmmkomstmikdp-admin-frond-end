import localConfig from '~/config'

export const strict = false

export const state = () => ({
  config: localConfig
})

export const getters = {
  config(state) {
    return state.config
  }
}

export const actions = {
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
  SET_CONFIG(state, serverConfig) {
    state.config = { ...localConfig, ...serverConfig }
  }
}
