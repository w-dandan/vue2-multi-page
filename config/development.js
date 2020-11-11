const path = require('path')
const readJson = require('./utils/readJson')
let cwd = process.cwd()
const resolve = function (url) {
  return path.resolve(cwd + '/' + url)
}
module.exports = function () {
  let jsonObj = readJson(resolve('config/pages.json'))

  function chainWebpack(config) {

  }

  function getPages() {
    let resultPages = {}
    let pages = jsonObj.pages
    Object.keys(pages).forEach(page => {
      let pageObj = pages[page]
      let entry = pageObj.entry || ''
      let template = pageObj.template || ''
      let filename = pageObj.filename || ''
      if (entry.startsWith('./')) {
        entry = entry.slice(2)
      }
      if (template.startsWith('./')) {
        template = template.slice(2)
      }
      resultPages[page] = {
        entry: resolve(entry),
        template: resolve(template),
        filename,
        chunks: ['chunk-vendors', 'chunk-common', page],
        chunksSortMode: 'manual',
      }
    })
    console.log(resultPages)
    return resultPages
  }

  return {
    chainWebpack,
    getPages
  }
}
