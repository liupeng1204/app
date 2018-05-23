import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import routerNavigation from '@/components/routerNavigation'
import routerViewName from '@/components/routerViewName'
import routerViewName2 from '@/components/routerViewName2'
import routerProps from '@/components/routerProps'

import testNodeJS from '@/components/testNodeJS'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/routerNavigation',
      name: 'routerNavigation',
      component: routerNavigation,
      // ②路由器独享的路由导航
      beforeEnter: (to, from, next) => {
        console.log('路由器独享:beforeEnter')
        next()
      }
    },
    {
      // 路由命名视图，可以用作一个路由路径 显示多个视图
      // (如果 router-view 没有设置名字，那么默认对应 default)
      // 例如一个页面有 sidebar（侧导航） 和 main（主内容） 两个视图
      path: '/routerName',
      name: 'routerName',
      components: {
        default: routerNavigation,
        'routerViewName': routerViewName,
        'routerViewName2': routerViewName2,
      }
    },
    {
      // props实现组件和路由的解耦
      path: '/routerProps/:prop',
      name: 'routerProps',
      props: true,
      component: routerProps
    }
  ]
})

// ①全局的路由导航
router.beforeEach((to, from, next) => {
  console.log('全局:routerNavigation')

  console.log("to.name 即将要跳转到的路由页：", to.name)

  if (to.name === 'HelloWorld') {
    console.log("--即将进入 HelloWorld 路由页")
    // next('/routerName')  // 进入到指定路由 == next({ path: '/routerName' })
  }

  if (to.name === 'routerProps') {
    // 添加参数跳转
    // next({path: '/routerProps', params: {routerProp: 'routerProp参数'}})
  }

  // next(false)  // 中断当前的导航。如果浏览器的 URL 改变了（可能是用户手动或者浏览器后退按钮），那么 URL 地址会重置到 from 路由对应的地址
  next()
})
router.afterEach((to, from) => {
  console.log('全局:routerNavigation')
})

export default router
