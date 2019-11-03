import blogServices from '@/services/blog'
import { CREATE_BLOG } from '../actions.type'

const state = {}

const getters = {}

const actions = {
  [CREATE_BLOG](context, data) {
    return blogServices.createBlog(data)
  }
}

const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations
}
