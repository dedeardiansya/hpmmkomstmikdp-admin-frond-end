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

const isAdmin = async () => {
  await setIdToken()
  return axios.get('/admin/user/profile')
}

export default {
  isAdmin
}
