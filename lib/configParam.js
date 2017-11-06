const configParam = {
  questions: [
    {
      type: 'input',
      name: 'projectName',
      message: '请输入您的项目名称:',
    },
    {
      type: 'list',
      name: 'browser',
      message: '选择您要生成的默认qreact版本:',
      choices: ['ie8', 'ie9', 'w3c'],
    }
  ],

  message: {
    start: '开始构建qreact项目...',
    success: 'qReact项目已构建完成!'
  },

  versionURL: 'https://github.com/YMFE/anu-template/archive/anu-template-v0.1.1.zip',

  fileName: './anu-template-v0.1.1.zip',
}

module.exports = configParam