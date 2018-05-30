# app

> vue示例项目

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test

webpack打包 npm run build
webpack.base.conf.js --> 依赖于
webpack.prod.conf.js --> 依赖于
build.js

打包生成的dist目录下文件(static文件夹+index.html)放到tomcat webapps下一个空文件夹中，可运行访问
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
