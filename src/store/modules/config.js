// import { JSON_DB_URL } from '@/config'
import db from '../../../db.json'

const state = {
  config: {}
}

const getters = {
  config(state) {
    return state.config
  }
}

const actions = {
  loadConfig({ commit }) {
    commit('setConfig', db)
    return db
    // return fetch(JSON_DB_URL)
    //   .then(res => {
    //     return res.json()
    //   })
    //   .then(data => {
    //     return data
    //   })
  }
}

const mutations = {
  setConfig(state, payload) {
    state.config = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
