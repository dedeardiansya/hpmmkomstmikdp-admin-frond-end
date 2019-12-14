import { auth } from '~/firebase'

export const state = () => ({ blogs: [], category: '' })

export const getters = {
  blogs(state) {
    return state.blogs.sortBy(o => new Date(o.createdAt)).reverse()
  },
  category(state) {
    return state.category
  }
}

export const actions = {
  CREATE_BLOG({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        this.$axios.setToken(await auth.currentUser.getIdToken(true), 'Bearer')
        const data = await this.$axios.$post('/admin/blog', payload)
        commit('ADD_BLOG', data.blog)
        resolve(data)
      } catch (e) {
        if (e.response) e.message = e.response.data.message
        reject(e)
      }
    })
  },
  FETCH_BLOGS({ commit, getters }, data) {
    return new Promise(async (resolve, reject) => {
      let limit = 4
      let offset = 0
      if (data && data.limit) limit = data.limit
      if (data && data.offset) offset = data.offset
      const url = `/admin/blog?limit=${limit}&offset=${offset}&category=${getters.category}`
      try {
        this.$axios.setToken(await auth.currentUser.getIdToken(true), 'Bearer')
        const blogs = (await this.$axios.$get(url)).blogs
        if (blogs.length) {
          commit('PUSH_BLOG', blogs)
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
  UPDATE_BLOG_PUBLIC({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        this.$axios.setToken(await auth.currentUser.getIdToken(true), 'Bearer')
        const data = (
          await this.$axios.$put(`/admin/blog/${payload.id}/public`, payload)
        ).blog
        commit('UPDATE_BLOG', data)
        resolve(data)
      } catch (e) {
        if (e.response) e.message = e.response.data.message
        reject(e)
      }
    })
  },
  UPDATE_BLOG_HERO({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        this.$axios.setToken(await auth.currentUser.getIdToken(true), 'Bearer')
        const data = (
          await this.$axios.$put(
            `admin/blog/${payload.id}/hero`,
            payload.form,
            { onUploadProgress: payload.onUploadProgress }
          )
        ).blog
        commit('UPDATE_BLOG', data)
        resolve(data)
      } catch (e) {
        if (e.response) e.message = e.response.data.message
        reject(e)
      }
    })
  },
  UPDATE_BLOG({ commit }, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        this.$axios.setToken(await auth.currentUser.getIdToken(true), 'Bearer')
        const data = (
          await this.$axios.$put(`admin/blog/${payload.id}`, payload)
        ).blog
        commit('UPDATE_BLOG', data)
        resolve(data)
      } catch (e) {
        if (e.response) e.message = e.response.data.message
        reject(e)
      }
    })
  },
  DELETE_BLOG({ commit }, id) {
    return new Promise(async (resolve, reject) => {
      try {
        this.$axios.setToken(await auth.currentUser.getIdToken(true), 'Bearer')
        const data = await this.$axios.$delete(`/admin/blog/${id}`)
        commit('REMOVE_BLOG', id)
        resolve(data)
      } catch (e) {
        if (e.response) e.message = e.response.data.message
        reject(e)
      }
    })
  }
}

export const mutations = {
  ADD_BLOG(state, data) {
    state.blogs = [data, ...state.blogs]
  },
  PUSH_BLOG(state, data) {
    state.blogs = [...state.blogs, ...data]
  },
  SET_BLOG_CATEGORY(state, data) {
    state.blogs = []
    state.category = data
  },
  UPDATE_BLOG(state, data) {
    const blogs = []
    state.blogs.forEach(blog => {
      if (blog.id === data.id) blog = data
      blogs.push(blog)
    })
    state.blogs = blogs
  },
  REMOVE_BLOG(state, data) {
    const blogs = []
    state.blogs.forEach(blog => {
      if (data !== blog.id) blogs.push(blog)
    })
    state.blogs = blogs
  }
}
