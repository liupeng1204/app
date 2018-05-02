var webpack = require('webpack');
var path = require('path');

module.exports = {
    mode: 'development',
    entry:{
        "index": './src/router/index.js', //入口文件
        "main": './src/main.js',
      "helloworld": './src/components/HelloWorld.vue'
    },
    output:{
        //node.js中__dirname变量获取当前模块文件所在目录的完整绝对路径
        path: path.resolve(__dirname, 'dist'), //输出位置
        filename:'[name].min.js' //输出文件名（[name]指入口文件对应的key）
    }
};
