<template>
  <div class="routerNavigation">
    vue-router提供的路由导航的方式:
      <p>①全局的(router.beforeEach(from,to,next)/ router.afterEach(from,to))、</p>
      <p>②单个路由独享的(beforeEnter:function(from,to,next){})、</p>
      <p>③组件内的(beforeRouteEnter (to, from, next) {}/ beforeRouteUpdate (to, from, next){}/ beforeRouteLeave(to, from, next){})</p>
  </div>
</template>

<script>
export default {
  name: 'routerNavigation'
}
</script>

<style>
.routerNavigation {
  text-align:left
}
</style>
