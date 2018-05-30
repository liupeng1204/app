<template>
  <div id="app">
    <!--<img src="./assets/image/logo.png">-->

    <!--过渡动效:CSS 动画-->
    <transition name="bounce">
      <router-view/>
    </transition>

    <!--路由命名视图-->
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
    margin: 20px;
  }

  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }


</style>
