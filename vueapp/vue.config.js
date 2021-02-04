module.exports = {
  lintOnSave: false,
  transpileDependencies: [
    'vuetify'
  ],
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  },
  devServer: {
    proxy: 'http://localhost:8080'
  }
}
