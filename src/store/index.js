import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    price: 10,
    count: 100
  },
  getters: {
    checkoutPrice: state => state.price,
    checkoutCount: state => state.count,
  },
  actions: {
    incrementPrice ({state, commit}, priceIncrement) {
      commit('increment', {priceIncrement: priceIncrement})
    },
    incrementCount ({state, commit}, countIncrement) {
      commit('increment', {countIncrement: countIncrement})
    }
  },
  mutations: {
    increment (state, {priceIncrement, countIncrement}) {
      state.price += priceIncrement || 0;
      state.count += countIncrement || 0;
    }
  }
});

export default store
