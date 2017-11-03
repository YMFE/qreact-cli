    

    const webpack = require('webpack')
    const path = require('path')

    module.exports = {
      // context: 如果不通过path.resolve 配置入口访问路径 watch: true失效
      context: path.resolve('./client'),

      entry: ["babel-polyfill", './index.js'],

      output: {
        path:path.resolve(__dirname,"client"),
        publicPath:"/assets/",
        filename:"bundle.js"
        // filename: 编译的文件名 仅用于命名每个文件
        // [name]: 多入口形式 入口文件名替换这里的name 
        // [chunkhash: num]: 入口文件的hash值 用于修改后清空缓存
        // filename: '[name].[chunkhash:3].js',
        // filename: './client/dist/[name].js'
      },
      // target: 'node',
      // externals: [nodeExternals()],
      // 服务器地址默认访问的文件路径
      devServer: {
        contentBase: './client'
      },
      module: {
        rules: [
          {
            test: /\.(js|jsx)?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['es2015', 'stage-2', 'react']
              }              
            }
          },
          {
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings 
            }, {
                loader: "css-loader" // translates CSS into CommonJS 
            }, {
                loader: "sass-loader" // compiles Sass to CSS 
            }]
          }
        ]
      },

      resolve: {
         alias: {
            'react': 'anujs',
            'react-dom': 'anujs',
              // 若要兼容 IE 请使用以下配置
              // 'react': 'anujs/dist/ReactIE',
              // 'react-dom': 'anujs/dist/ReactIE',
              // 'redux': 'anujs/lib/ReduxIE',//这主要用于IE6－8，因为官方源码中的isPlainObject方法性能超差
              // 如果引用了 prop-types 或 create-react-class
              // 需要添加如下别名
              'prop-types': 'anujs/lib/ReactPropTypes',
              // 'create-react-class': 'anujs/lib/createClass'
              //如果你在移动端用到了onTouchTap事件
              // 'react-tap-event-plugin': 'anujs/lib/injectTapEventPlugin',  
         }
      },

      watch: true
    }

