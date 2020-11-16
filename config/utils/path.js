const path = require('path')

let cwd = process.cwd()

const resolve = function (url) {
  return path.resolve(cwd + '/' + url)
}

const resultObject = {
  resolvePath: resolve
}

module.exports = resultObject
