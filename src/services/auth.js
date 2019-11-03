import service from './axios'
import { auth, googleProvider } from '../firebase'

const getToken = () => auth.currentUser.getIdToken(true)

const isAdmin = idToken =>
  new Promise(async (resolve, reject) => {
    try {
      resolve(
        await service(idToken)
          .get('/admin/user/profile')
          .then(res => res.data)
      )
    } catch (e) {
      if (e.response) e.message = e.response.data.message
      reject(e)
    }
  })

const signInWithGoogle = () =>
  new Promise(async (resolve, reject) => {
    auth
      .signInWithPopup(googleProvider)
      .then(() => getToken())
      .then(idtoken => isAdmin(idtoken))
      .then(() => {
        resolve(auth.currentUser)
      })
      .catch(e => {
        auth.signOut()
        reject(e)
      })
  })

const signOut = () => auth.signOut()

export default {
  isAdmin,
  signInWithGoogle,
  signOut,
  getToken
}
