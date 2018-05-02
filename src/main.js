// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import testProp from './components/testProp'
import testEmit from './components/testEmit'
import testVuex from './components/testVuex'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App, testProp, testEmit, testVuex},
  template: `<div>
                <App/>
                
                <test-prop testProp="test">
                   <span slot="testSlot">
                      <h5>这是测试slot插槽</h5>
                   </span>
                </test-prop>
                
                <test-emit/>
                
                <test-vuex/>
      
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
