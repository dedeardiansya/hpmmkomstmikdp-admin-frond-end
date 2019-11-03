import service from './axios'
import authService from './auth'

const createBlog = data =>
  new Promise(async (resolve, reject) => {
    try {
      resolve(
        await service(await authService.getToken())
          .post('/admin/blog', data)
          .then(res => res.data)
      )
    } catch (e) {
      if (e.response) e.message = e.response.data.message
      reject(e)
    }
  })

const fetchBlogs = data =>
  new Promise(async (resolve, reject) => {
    let limit = 4
    let offset = 0
    let category = ''
    if (data && data.limit) limit = data.limit
    if (data && data.offset) offset = data.offset
    if (data && data.category) category = data.category
    const url = `/admin/blog?limit=${limit}&offset=${offset}&category=${category}`
    try {
      resolve(
        await service(await authService.getToken())
          .get(url)
          .then(res => res.data.blogs)
      )
    } catch (e) {
      if (e.response) e.message = e.response.data.message
      reject(e)
    }
  })

const fetchBlog = id =>
  new Promise(async (resolve, reject) => {
    try {
      resolve(
        await service(await authService.getToken())
          .get(`/admin/blog/${id}`)
          .then(res => res.data.blog)
      )
    } catch (e) {
      if (e.response) e.message = e.response.data.message
      reject(e)
    }
  })

const searchBlog = value =>
  new Promise(async (resolve, reject) => {
    try {
      resolve(
        await service(await authService.getToken())
          .get(`/admin/blog/search?value=${value}`)
          .then(res => res.data.results)
      )
    } catch (e) {
      if (e.response) e.message = e.response.data.message
      reject(e)
    }
  })

export default {
  createBlog,
  fetchBlogs,
  fetchBlog,
  searchBlog
}
