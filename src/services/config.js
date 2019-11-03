import service from './axios'

const fetchConfig = () => {
  return new Promise(async (resolve, reject) => {
    try {
      resolve(
        await service(null)
          .get('/config')
          .then(res => res.data.config)
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
  fetchConfig
}
