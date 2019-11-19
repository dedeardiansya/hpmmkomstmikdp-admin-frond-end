import { auth } from '../firebase'

const init = store =>
  new Promise(resolve => {
    const app = auth.onAuthStateChanged(user => {
      store.commit('SET_AUTH', user)
      app()
      resolve()
    })
  })

export default async ({ store }) => {
  await init(store)
  document.getElementById('preloader').outerHTML = ''
}
