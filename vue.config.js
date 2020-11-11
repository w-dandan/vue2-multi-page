const production = require('./config/production')
const development = require('./config/development')

let config = process.env.NODE_ENV === 'production' ? production() : development()

module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('tailwindcss')
        ]
      }
    }
  },
  chainWebpack: conf => {
    config.chainWebpack(conf)
  },
  pages: config.getPages()
}
