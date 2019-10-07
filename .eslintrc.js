module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/vue'
  ],
  plugins: [
    'prettier'
  ],
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'max-len': 'off',
    'no-console': 'off',
    'vue/require-prop-types': 'off',
    'vue/require-default-prop': 'off',
    'vue/no-template-shadow': 'off',
    'vue/no-v-html': 'off'
  }
}
