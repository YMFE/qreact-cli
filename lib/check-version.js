const request = require('request')
const semver = require('semver')
const chalk = require('chalk')
const packageConfig = require('../package.json')

module.exports = done => {
  const nodeVersion = packageConfig.engines.node
  // 确保使用最小支持的节点版本
  if (!semver.satisfies(process.version, nodeVersion)) {
    return console.log( chalk.red(`您必须将版本升级到${nodeVersion}. 才可以使用qreact!`) )
  }
  return true
}
