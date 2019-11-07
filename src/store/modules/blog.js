import blogServices from '@/services/blog'
import { CREATE_BLOG, FETCH_BLOGS } from '../actions.type'
import { SET_BLOG_CATEGORY, PUSH_BLOG } from '../mutations.type'

const state = {
  blogs: [],
  category: ''
}

const getters = {
  blogs(state) {
    return state.blogs
  },
  blogCategory(state) {
    return state.category
  }
}

const actions = {
  [CREATE_BLOG](context, data) {
    return blogServices.createBlog(data)
  },
  [FETCH_BLOGS]({ commit }, data) {
    return blogServices.fetchBlogs(data).then(blogs => {
      if (blogs.length) {
        commit(PUSH_BLOG, blogs)
        return false
      }
      return true
    })
  }
}

const mutations = {
  [PUSH_BLOG](state, data) {
    state.blogs = [...state.blogs, ...data]
  },
  [SET_BLOG_CATEGORY](state, data) {
    state.blogs = []
    state.category = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
