import service from './axios'

const fetchConfig = () =>
  new Promise(async (resolve, reject) => {
    try {
      resolve(
        await service(null)
          .get('/config')
          .then(res => res.data.config)
      )
    } catch (e) {
      if (e.response) e.message = e.response.data.message
      reject(e)
    }
  })

export default {
  fetchConfig
}
