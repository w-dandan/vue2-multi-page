const { resolvePath } = require('./utils/path')

/**
 * 路径格式化
 * @param{String} path
 */
function path2path(path) {
  return path.slice(2)
}

module.exports = function (pageConfig) {
  let resultPages = {}
  let pages = pageConfig.pages
  Object.keys(pages).forEach(page => {
    let pageObj = pages[page]
    let entry = pageObj.entry || ''
    let template = pageObj.template || ''
    let filename = pageObj.filename || ''
    if (entry.startsWith('./')) {
      entry = path2path(entry)
    }
    if (template.startsWith('./')) {
      template = path2path(template)
    }
    resultPages[page] = {
      entry: resolvePath(entry),
      template: resolvePath(template),
      filename,
      chunks: ['chunk-vendors', 'chunk-common', page],
      chunksSortMode: 'manual',
    }
  })
  return resultPages
}
