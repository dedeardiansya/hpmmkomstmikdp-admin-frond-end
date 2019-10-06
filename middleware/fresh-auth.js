export default async function({ store, $axios, app }) {
  const token = app.$cookies.get('auth_token')
  if (!token) return null
  try {
    const { data } = await $axios.get('/auth/profile', {
      headers: { authorization: 'bearer ' + token }
    })
    store.commit('SET_AUTH', data)
  } catch (e) {
    app.$cookies.remove('auth_token')
    store.commit('SET_AUTH', null)
  }
}
