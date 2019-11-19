const baseApiURL = process.env.BASE_API_URL || 'http://localhost:5000/api'
export default {
  mode: 'spa',

  env: { baseApiURL },

  router: {
    linkExactActiveClass: 'active'
  },

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

  loading: { color: '#fff' },

  css: [
    '~/assets/fonts/poppins/css/poppins.css',
    '~/assets/fonts/simple-line-icons/css/simple-line-icons.css',
    '~/assets/scss/app.scss',
    'sweetalert2/src/sweetalert2.scss',
    'froala-editor/css/froala_editor.pkgd.min.css',
    'froala-editor/css/plugins.pkgd.min.css',
    'froala-editor/css/froala_style.min.css'
  ],

  plugins: [
    '~/plugins/ClientInit',
    '~/plugins/VueSweetalert2',
    '~/plugins/SvgIcons',
    '~/plugins/Sidebar'
  ],

  buildModules: ['@nuxtjs/eslint-module'],

  modules: ['bootstrap-vue/nuxt', '@nuxtjs/axios', '@nuxtjs/pwa'],

  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false
  },

  axios: {
    baseURL: baseApiURL,
    progress: false
  },

  build: {
    extend(config, ctx) {}
  }
}
