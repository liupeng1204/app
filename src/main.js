// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import testProp from './components/testProp'
import testEmit from './components/testEmit'
import testVuex from './components/testVuex'

import testNodeJS from './components/testNodeJS'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App, testProp, testEmit, testVuex, testNodeJS},
  template: `<div>
                <App/>
                
                <test-prop testProp="test">
                   <span slot="testSlot">
                      <h5>这是测试slot插槽</h5>
                   </span>
                </test-prop>
                
                <test-emit/>
                
                <test-vuex/>
                
                <testNodeJS/>
      
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
