const commander = require('commander')
const chalk = require('chalk')

const help = log => {
  log()
  log('qreact 使用帮助:')
  log()
  log(chalk.gray('  # 开发环境'))
  log('  $ npm run start')
  log()
  log(chalk.gray('  # 生产环境'))
  log('  $ npm run build')
  log()
}

module.exports = help