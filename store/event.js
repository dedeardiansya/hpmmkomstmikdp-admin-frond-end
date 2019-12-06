import { auth } from '~/firebase'

export const state = () => ({ events: [] })

export const getters = {
  events(state) {
    return state.events.sortBy(o => new Date(o.createdAt)).reverse()
  }
}

export const actions = {
  CREATE_EVENT({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        this.$axios.setToken(await auth.currentUser.getIdToken(true), 'Bearer')
        const data = await this.$axios.$post('/admin/event', payload)
        commit('ADD_EVENT', data.event)
        resolve(data)
      } catch (e) {
        if (e.response) e.message = e.response.data.message
        reject(e)
      }
    })
  },
  FETCH_EVENTS({ commit }, data) {
    return new Promise(async (resolve, reject) => {
      let limit = 4
      let offset = 0
      if (data && data.limit) limit = data.limit
      if (data && data.offset) offset = data.offset
      const url = `/admin/event?limit=${limit}&offset=${offset}`
      try {
        this.$axios.setToken(await auth.currentUser.getIdToken(true), 'Bearer')
        const events = (await this.$axios.$get(url)).events
        if (events.length) {
          commit('PUSH_EVENT', events)
          resolve(false)
        } else {
          resolve(true)
        }
      } catch (e) {
        if (e.response) e.message = e.response.data.message
        reject(e)
      }
    })
  },
  UPDATE_EVENT_PUBLIC({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        this.$axios.setToken(await auth.currentUser.getIdToken(true), 'Bearer')
        const url = `/admin/event/${payload.id}/public`
        const data = (await this.$axios.$put(url, payload)).event
        commit('UPDATE_EVENT', data)
        resolve(data)
      } catch (e) {
        if (e.response) e.message = e.response.data.message
        reject(e)
      }
    })
  },
  UPDATE_EVENT_HERO({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        this.$axios.setToken(await auth.currentUser.getIdToken(true), 'Bearer')
        const data = (await this.$axios.$put(
          `admin/event/${payload.id}/hero`,
          payload.form,
          { onUploadProgress: payload.onUploadProgress }
        )).event
        commit('UPDATE_EVENT', data)
        resolve(data)
      } catch (e) {
        if (e.response) e.message = e.response.data.message
        reject(e)
      }
    })
  },
  UPDATE_EVENT({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        this.$axios.setToken(await auth.currentUser.getIdToken(true), 'Bearer')
        const data = (await this.$axios.$put(
          `admin/event/${payload.id}`,
          payload
        )).event
        commit('UPDATE_EVENT', data)
        resolve(data)
      } catch (e) {
        if (e.response) e.message = e.response.data.message
        reject(e)
      }
    })
  },
  DELETE_EVENT({ commit }, id) {
    return new Promise(async (resolve, reject) => {
      try {
        this.$axios.setToken(await auth.currentUser.getIdToken(true), 'Bearer')
        const data = await this.$axios.$delete(`/admin/event/${id}`)
        commit('REMOVE_EVENT', id)
        resolve(data)
      } catch (e) {
        if (e.response) e.message = e.response.data.message
        reject(e)
      }
    })
  }
}

export const mutations = {
  ADD_EVENT(state, data) {
    state.events = [data, ...state.events]
  },
  PUSH_EVENT(state, data) {
    state.events = [...state.events, ...data]
  },
  UPDATE_EVENT(state, data) {
    const events = []
    state.events.forEach(event => {
      if (event.id === data.id) event = data
      events.push(event)
    })
    state.events = events
  },
  REMOVE_EVENT(state, data) {
    const events = []
    state.events.forEach(event => {
      if (data !== event.id) events.push(event)
    })
    state.events = events
  }
}
