import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_BASE_API_URL

const service = idToken => {
  if (idToken) axios.defaults.headers.common.authorization = `bearer ${idToken}`
  return axios
}

export default service
