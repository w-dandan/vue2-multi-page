const production = require('./config/production')
const development = require('./config/development')
const readJson = require('./config/utils/readJson')
const { resolvePath } = require('./config/utils/path')
let transformPagesHandler = require('./config/pages')
let pageConfig = readJson(resolvePath('config/pages.json'))

let pages = transformPagesHandler(pageConfig)

let config = process.env.NODE_ENV === 'production' ? production(pages, pageConfig) : development(pages, pageConfig)

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
  pages: pages
}
