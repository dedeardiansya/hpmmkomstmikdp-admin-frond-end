import axios from './axios'

const fetchConfig = async () => {
  return axios.get('/config').then(res => res.data.config)
}

export default {
  fetchConfig
}
