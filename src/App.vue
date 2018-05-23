<template>
  <div id="app">
    <img src="./assets/logo.png">

    <!--路由命名视图-->
    <router-view/>
    <router-view name="routerViewName"/>
    <router-view name="routerViewName2"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
