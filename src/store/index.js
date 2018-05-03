import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    pid: "123",
    price: 10,
    count: 100
  },
  getters: {  // 用于vuex中mapGetter,获取一些处理后的响应值
    checkoutPrice: state => state.price,
    checkoutCount: state => state.count,
  },
  actions: {  // 用于vuex中mapActions,获取一些业务上的方法(commit调用mutations中的操作)
    incrementPrice ({state, commit}, priceIncrement) {
      commit('increment', {priceIncrement: priceIncrement})
    },
    incrementCount ({state, commit}, countIncrement) {
      commit('increment', {countIncrement: countIncrement})
    }
  },
  mutations: {  // 唯一更新state中数据的地方，理解为抽象的actions
    increment (state, {priceIncrement, countIncrement}) {
      state.price += priceIncrement || 0;
      state.count += countIncrement || 0;
    }
  }
});

export default store  // 导出Vuex.Store,供main.js中vue实例化时加载
