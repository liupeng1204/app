<template>
  <div>
    这是测试vuex的基本使用示例
    <p>pid: {{pid}}</p>
    <!--<p>price: {{price}} <button @click="incrementPrice(10)">price +10</button></p>-->
    <!--<p>count: {{count}} <button @click="incrementCount(50)">count +50</button></p>-->
    <p>price: {{checkoutPrice}} <button @click="incrementPrice(10)">price +10</button></p>
    <p>count: {{checkoutCount}} <button @click="incrementCount(50)">count +50</button></p>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'

  export default {
    name: "test-vuex",

    // computed: mapGetters({
    //   price: 'checkoutPrice',
    //   count: 'checkoutCount'
    // }),
    computed: {
      ...mapState([
        'pid'
      ]),
      ...mapGetters([
        'checkoutPrice',
        'checkoutCount'
      ])
    },
    methods: mapActions([
      'incrementPrice',
      'incrementCount'
    ]),

    mounted(){
      // mapGetters通过扩展运算符将store.state.checkoutPrice 映射this.checkoutPrice  这个this 很重要，这个映射直接映射到当前Vue的this对象上。
      // 所以通过this都能将这些对象点出来，同理，mapState, mapActions, mapMutations都是一样的道理。牢记~~~
      console.log(typeof checkoutPrice); // undefined
      console.log(typeof this.checkoutPrice);  // number
    }
  }
</script>

