const baseApiURL = process.env.BASE_API_URL || 'http://localhost:5000/api'
module.exports = {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#666ee8' },
  css: [
    '~/assets/fonts/Roboto/Roboto.css',
    'izitoast/dist/css/iziToast.css',
    '~/assets/fonts/ionicon/css/ionicons.css'
  ],
  plugins: [{ src: '~/plugins/mixins/izitoast', ssr: false }],
  buildModules: ['@nuxtjs/eslint-module'],
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'cookie-universal-nuxt'
  ],
  axios: {
    baseURL: baseApiURL,
    progress: false
  },
  build: {
    extend(config, ctx) {}
  }
}
