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
  try {
    await store.dispatch('FETCH_SERVER_CONFIG')
    await init(store)
  } catch (e) {
    console.log(e)
  }
  document.getElementById('preloader').outerHTML = ''
}
