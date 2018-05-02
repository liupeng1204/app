<template>
    <div>
      这是测试emit事件传递
      <p>{{total}}-{{totalComputed}}</p>
      <component-b1 @custom-event="incrementTotal"/>
      <component-b1 @custom-event="incrementTotal"/>
    </div>
</template>

<script>
  export default {
    name: 'testEmit',
    data: () => {
        return {
          total: 0
        }
    },
    computed: {
      totalComputed: function(){
        return this.total;
      }
    },
    methods: {
      incrementTotal: function () {
        this.total += 1
      }
    },
    components: {
      "component-b1": {
        template: '<button v-on:click="incrementCounter">小计：{{ counter }}</button>',

        data: function () {
          return {
            counter: 0
          }
        },
        methods: {
          incrementCounter: function () {
            this.counter += 1;
            this.$emit('custom-event');  // message是父组件上的自定义事件（事件名不能取驼峰式）
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
