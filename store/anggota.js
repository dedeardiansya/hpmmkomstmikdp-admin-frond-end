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
  },
  FETCH_ANGGOTA({ commit }) {
    return new Promise(async (resolve, reject) => {
      try {
        this.$axios.setToken(await auth.currentUser.getIdToken(true), 'Bearer')
        const { members } = await this.$axios.$get('/admin/member')
        members.forEach(member => {
          console.log(member)
          commit('SET_ANGGOTA', member)
        })
        resolve(members)
      } catch (e) {
        if (e.response) e.message = e.response.data.message
        reject(e)
      }
    })
  },
  UPDATE_AVATAR({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        this.$axios.setToken(await auth.currentUser.getIdToken(true), 'Bearer')
        const { member } = await this.$axios.$put(
          `admin/member/avatar/${payload.id}`,
          payload.form,
          { onUploadProgress: payload.onUploadProgress }
        )
        commit('UPDATE_ANGGOTA', member)
        resolve(member.avatar)
      } catch (e) {
        if (e.response) e.message = e.response.data.message
        reject(e)
      }
    })
  },
  UPDATE_ANGGOTA({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        this.$axios.setToken(await auth.currentUser.getIdToken(true), 'Bearer')
        const { member } = await this.$axios.$put(
          `admin/member/${payload.id}`,
          payload
        )
        commit('UPDATE_ANGGOTA', member)
        resolve(member)
      } catch (e) {
        if (e.response) e.message = e.response.data.message
        reject(e)
      }
    })
  },
  DELETE_ANGGOTA({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        this.$axios.setToken(await auth.currentUser.getIdToken(true), 'Bearer')
        const data = await this.$axios.$delete(`/admin/member/${payload.id}`)
        commit('REMOVE_ANGGOTA', payload)
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
  },
  UPDATE_ANGGOTA(state, data) {
    const anggotas = []
    state.anggota.forEach(anggota => {
      if (anggota.id === data.id) anggota = data
      anggotas.push(anggota)
    })
    state.anggota = anggotas
  },
  REMOVE_ANGGOTA(state, data) {
    const anggotas = []
    state.anggota.forEach(anggota => {
      if (anggota.id !== data.id) anggotas.push(anggota)
    })
    state.anggota = anggotas
  }
}
