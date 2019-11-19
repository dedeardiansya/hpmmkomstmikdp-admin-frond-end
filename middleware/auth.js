export default function({ store, redirect }) {
  if (!store.getters.isLogin) {
    redirect('/login')
  }
}
