import axios from './axios'
import { auth } from '../firebase'

const setIdToken = () => {
  if (auth.currentUser) {
    return new Promise(async resolve => {
      const idToken = await auth.currentUser.getIdToken()
      axios.defaults.headers.common.authorization = `bearer ${idToken}`
      resolve()
    })
  }
}

const createBlog = async data => {
  await setIdToken()
  return axios.post('/admin/blog', data).then(res => res.data)
}

export default {
  createBlog
}
