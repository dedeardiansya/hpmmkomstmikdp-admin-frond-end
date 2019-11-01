import configService from '../../services/config'
import localConfig from '../../../config'
import { FETCH_SERVER_CONFIG } from '../actions.type'
import { SET_CONFIG } from '../mutations.type'

const state = {
  config: localConfig
}

const getters = {
  config(state) {
    return state.config
  }
}

const actions = {
  [FETCH_SERVER_CONFIG]({ commit }) {
    return configService.fetchConfig().then(serverConfig => {
      commit(SET_CONFIG, serverConfig)
    })
  }
}

const mutations = {
  [SET_CONFIG](state, serverConfig) {
    state.config = { ...localConfig, ...serverConfig }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
