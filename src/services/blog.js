import service from './axios'

const createBlog = async (idToken, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      resolve(
        await service(idToken)
          .post('/admin/blog', data)
          .then(res => res.data)
      )
    } catch (e) {
      let message
      if (e.response) message = e.response.data.message
      else message = e.message
      reject(message)
    }
  })
}

export default {
  createBlog
}
