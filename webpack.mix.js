const path = require('path')
const mix = require('laravel-mix')

mix.config.vue.esModule = true

mix.setPublicPath('docs')
  .js('resources/js/app.js', 'js')
  .sass('resources/sass/app.scss', 'css')

  .sourceMaps()
  .disableNotifications()

// if (mix.inProduction()) {
//   mix.version()

//   mix.extract([
//     'vue',
//     'axios',
//     'vuex',
//     'vuetify',
//     'vue-i18n',
//     'vue-meta',
//     'js-cookie',
//     'vue-router',
//     'vuex-router-sync',
//   ])
// }

mix.webpackConfig({
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      '~': path.join(__dirname, './resources/js')
    }
  },
  output: {
    chunkFilename: 'js/[name].[chunkhash].js',
    publicPath: mix.config.hmr ? '//localhost:8080' : '/'
  }
})
