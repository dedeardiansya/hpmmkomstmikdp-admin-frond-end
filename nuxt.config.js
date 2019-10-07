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
  router: {
    linkActiveClass: 'active',
    middleware: ['fresh-auth']
  },
  loading: { color: '#666ee8' },
  css: [
    '~/assets/fonts/nucleo/css/nucleo.css',
    '~/assets/fonts/open-sans/css/open-sans.css',
    'izitoast/dist/css/iziToast.css',
    'quill/dist/quill.snow.css',
    '~/assets/scss/argon.scss'
  ],
  styleResources: {
    scss: ['assets/scss/resources.scss']
  },
  plugins: [
    { src: '~/plugins/mixins/izitoast', ssr: false },
    { src: '~/plugins/vue-quill', ssr: false },
    { src: '~/plugins/vuejs-datepicker', ssr: false },
    { src: '~/plugins/globalComponents/no-ssr', ssr: false },
    '~/plugins/globalComponents/ssr'
  ],
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
