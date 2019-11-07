import blogServices from '@/services/blog'
import {
  CREATE_BLOG,
  FETCH_BLOGS,
  UPDATE_BLOG_PUBLIC,
  DELETE_BLOG
} from '../actions.type'
import {
  SET_BLOG_CATEGORY,
  PUSH_BLOG,
  SET_BLOG_PUBLIC,
  REMOVE_BLOG
} from '../mutations.type'

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
  },
  [UPDATE_BLOG_PUBLIC]({ commit }, data) {
    return blogServices.updateBlogPublic(data.id, data.value).then(() => {
      commit(SET_BLOG_PUBLIC, data)
    })
  },
  [DELETE_BLOG]({ commit }, data) {
    return blogServices.deleteBlog(data).then(() => {
      commit(REMOVE_BLOG, data)
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
  },
  [SET_BLOG_PUBLIC](state, data) {
    const blogs = []
    state.blogs.forEach(blog => {
      if (blog.id == data.id) {
        blog.public = data.value
      }
      blogs.push(blog)
    })
    state.blogs = blogs
  },
  [REMOVE_BLOG](state, data) {
    const blogs = []
    state.blogs.forEach(blog => {
      if (data != blog.id) blogs.push(blog)
    })
    state.blogs = blogs
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
