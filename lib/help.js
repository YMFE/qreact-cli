const commander = require('commander')
const chalk = require('chalk')

const help = log => {
  log('  qreact 使用帮助:')
  log()
  log(chalk.gray('    # create a new project with an official template'))
  log('    $ vue init webpack my-project')
  log()
  log(chalk.gray('    # create a new project straight from a github template'))
  log('    $ vue init username/repo my-project')
  log()
}

module.exports = help