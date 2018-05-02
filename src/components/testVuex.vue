<template>
  <div>
    这是测试vuex的基本使用示例
    <p>price: {{price}} <button @click="incrementPrice(10)">price +10</button></p>
    <p>count: {{count}} <button @click="incrementCount(50)">count +50</button></p>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'

  export default {
    name: "test-vuex",

    computed: mapGetters({
      price: 'checkoutPrice',
      count: 'checkoutCount'
    }),
    methods: mapActions([
      'incrementPrice',
      'incrementCount'
    ])
  }
</script>

