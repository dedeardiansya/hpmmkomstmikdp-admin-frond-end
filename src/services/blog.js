import service from './axios'
import authService from './auth'

const createBlog = async data => {
  return new Promise(async (resolve, reject) => {
    try {
      const idToken = await authService.getToken()
      resolve(
        await service(idToken)
          .post('/admin/blog', data)
          .then(res => res.data)
      )
    } catch (e) {
      if (e.response) e.message = e.response.data.message
      reject(e)
    }
  })
}

export default {
  createBlog
}
