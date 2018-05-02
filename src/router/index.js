import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import routerNavigation from '@/components/routerNavigation'
import routerViewName from '@/components/routerViewName'

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
      path: '/routerName',
      name: 'routerName',
      components: {
        default: routerNavigation,
        'routerName': routerViewName
      }
    }
  ]
})

// ①全局的路由导航
router.beforeEach((to, from, next) => {
  console.log('全局:routerNavigation')
  next()
})
router.afterEach((to, from) => {
  console.log('全局:routerNavigation')
})

export default router
