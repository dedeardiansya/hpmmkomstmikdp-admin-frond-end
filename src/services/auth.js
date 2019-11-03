import service from './axios'

const isAdmin = idToken => {
  return new Promise(async (resolve, reject) => {
    try {
      resolve(
        await service(idToken)
          .get('/admin/user/profile')
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
  isAdmin
}
