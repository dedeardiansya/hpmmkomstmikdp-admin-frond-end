import { auth } from '~/firebase'

export const state = () => ({
  anggota: []
})

export const getters = {
  anggota(state) {
    return state.anggota
  }
}

export const actions = {
  CREATE_ANGGOTA({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        this.$axios.setToken(await auth.currentUser.getIdToken(true), 'Bearer')
        const data = await this.$axios.$post('/admin/member', payload)
        commit('SET_ANGGOTA', data.member)
        resolve(data)
      } catch (e) {
        if (e.response) e.message = e.response.data.message
        reject(e)
      }
    })
  }
}

export const mutations = {
  SET_ANGGOTA(state, data) {
    state.anggota = [data, ...state.anggota]
  }
}
