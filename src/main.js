// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// npm install -D bootstrap-vue, 并在入口处导入安装好的bootstrap-vue 以及两个css文件
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// 导入自定义的css文件
import '../static/css/main.css'


import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// use引入的BootstrapVue, 这样<b-button>等组件才可在.vue文件中使用
Vue.use(BootstrapVue);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: `<div>
                <App/>
             </div>`,
  // ③组件内部的路由导航
  beforeRouteEnter: (to, from, next) => {
    console.log('组件内部:routerNavigation')
    next()
  },
  beforeRouteUpdate: (to, from, next) => {
    console.log('组件内部:routerNavigation')
    next()
  },
  beforeRouteLeave: (to, from, next) => {
    console.log('组件内部:routerNavigation')
    next()
  }
})

// 这是测试NodeJS一些特性
const assert = require('assert')
assert.ok(1)
assert.ok(true, 'assert.ok(true)')

assert.strictEqual(1, 1);
assert.notStrictEqual(1, '1');

const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('event', function(a, b){
  // eventEmitter.emit() 方法允许将任意参数传给监听器函数。
  // 当一个普通的监听器函数被 EventEmitter 调用时，标准的 this 关键词会被设置指向监听器所附加的 EventEmitter。
  console.log(a, b, this)
})
myEmitter.on('event2', (a, b) => {
  // 也可以使用 ES6 的箭头函数作为监听器。但是这样 this 关键词就不再指向 EventEmitter 实例：
  console.log(a, b, this)
})

myEmitter.emit('event', 'a', 'b');
myEmitter.emit('event2', 'a', 'b');


myEmitter.once('event3', (a) => {
  console.log(a)
})
myEmitter.emit('event2', 'a'); // => 打印 'a'
myEmitter.emit('event2', 'a'); // => 不再打印
