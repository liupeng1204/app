<template>
  <div id="app">
    <!--<img src="./assets/image/logo.png">-->

    <!--过渡动效:CSS 动画（tabbar切换时候影响效果，暂注释掉）-->
    <!--<transition name="bounce">-->
      <router-view/>
    <!--</transition>-->

    <!--路由命名视图-->
    <router-view name="routerViewName"/>
    <router-view name="routerViewName2"/>

    <tabbar style="font-size:15px;">
      <tabbar-item selected link="/vux">
        <img slot="icon" src="../src/assets/image/wx.png">
        <img slot="icon-active" src="../src/assets/image/wx_active.png">
        <span slot="label">微信</span>
      </tabbar-item>
      <tabbar-item badge="2" link="/tabs">
        <img slot="icon" src="../src/assets/image/txl.png">
        <img slot="icon-active" src="../src/assets/image/txl_active.png">
        <span slot="label">通讯录</span>
      </tabbar-item>
      <tabbar-item link="/helloWorld">
        <img slot="icon" src="../src/assets/image/fx.png">
        <img slot="icon-active" src="../src/assets/image/fx_active.png">
        <span slot="label">发现</span>
      </tabbar-item>
      <tabbar-item link="/testVuex">
        <img slot="icon" src="../src/assets/image/me.png">
        <img slot="icon-active" src="../src/assets/image/me_active.png">
        <span slot="label">我</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import {Tabbar, TabbarItem} from 'vux';

  export default {
    name: 'App',
    components: {
      Tabbar,
      TabbarItem
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*margin: 20px;*/
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
