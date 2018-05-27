<template>
  <div>
    ============================= TestFilters.vue<br>
    这是测试filters过滤器<br>

    <label for="inputFilter">输入</label>
    <input id="inputFilter" v-model="value">
    <p>输出 {{value | valueFilter}}</p>
  </div>
</template>

<script>
  export default {
    name: "TestFilters",
    data() {
      return {
        value: ''
      }
    },
    filters: {
      valueFilter: (value) => {
        return !value ? '' : value.charAt(0).toUpperCase() + value.slice(1)
      }
    }
  }
</script>

<style scoped>

</style>
