<template>
  <div>
    ============================= tabs.vue<br>
    动态组件Tab切换
    <div class="tabs">
      <div :class="{tab: true, 'tab-active': currentTab === 'prince'}" @click="toggleTab('prince')"><a>小王子</a></div>
      <div :class="{tab: true, 'tab-active': currentTab === 'rose'}" @click="toggleTab('rose')"><a>小玫瑰</a></div>
      <div :class="{tab: true, 'tab-active': currentTab === 'fox'}" @click="toggleTab('fox')"><a>小狐狸</a></div>
    </div>
    <div class="tab-show">
      <!--设置过渡模式mode(如果不设置,离开-进入动画会同时渲染,视觉效果不好)
      in-out：新元素先进行过渡，完成之后当前元素过渡离开。
      out-in：当前元素先进行过渡，完成之后新元素过渡进入。-->
      <transition name="tab-show-transition" mode="out-in">
        <component :is="currentTab" keep-alive></component>
      </transition>
    </div>
  </div>
</template>

<script>
  import prince from '../components/prince'
  import rose from '../components/rose'
  import fox from '../components/fox'

  export default {
    name: "tabs",
    data(){
      return {
        currentTab: 'prince'
      }
    },
    components: {
      'prince': prince,
      'rose': rose,
      'fox': fox
    },
    methods: {
      toggleTab: function(tabName){
        this.currentTab = tabName;
      }
    }
  }
</script>

<style scoped lang="scss">

  $tab-background-color: whitesmoke;
  $tab-border-background-color: darkgray;
  $tab-active-background-color: lightgrey;

  .tab {
    display: inline-block;
    padding: 0 5px;
    margin-bottom: -1px;
    border: 1px $tab-border-background-color solid;
    border-radius: 3px;
    cursor: pointer;
    background-color: $tab-background-color;
    color: black;

    /*scss嵌套语法，类似Less*/
    &.tab-active {
      background-color: $tab-active-background-color;
    }
    &:hover {
      transform: scale(1.2);
    }
  }


  .tab-show {
    border: 1px $tab-border-background-color solid;
    padding: 50px;
    height: 400px;
    width:600px;

    & div {
      transform: rotate(3deg)
    }
  }


  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .tab-show-transition-enter-active {
    transition: all .3s ease;
  }
  .tab-show-transition-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .tab-show-transition-enter, .tab-show-transition-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(100px);
    opacity: 0;
  }

</style>
