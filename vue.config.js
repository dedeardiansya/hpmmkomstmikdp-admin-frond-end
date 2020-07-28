module.exports = {
  lintOnSave: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/global.scss";`
      }
    }
  }
}
