const fs = require('fs')

function readJson(filePath = '') {
  if (!fs.existsSync(filePath)) {
    return new Error(filePath + '没有此文件')
  }
  if (!filePath.endsWith('.json')) {
    return new Error(filePath + '不是 JSON 文件')
  }
  let content = fs.readFileSync(filePath, 'utf-8')
  let result = {}
  try {
    result = JSON.parse(content)
  } catch (e) {
    console.log(e)
  }
  return result
}

module.exports = readJson
