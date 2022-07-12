const { defineConfig } = require('@vue/cli-service')
const { proxy } = require('jquery')
const webpack = require("webpack")
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  //配置jquery
  configureWebpack: {
    plugins: [
      // 配置 jQuery 插件的参数
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default']
      })
    ]
  },
  devServer: {
    proxy:{
      "/api":{
        target:"http://47.96.0.211:9000",
        //允许跨域
        changOrigin:true,
        //重写的路径api代替了目标路径
        pathRewrite:{
          "^/api":""
        }
      }
    }
  },
})
