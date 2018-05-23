<template>
    <div>
    ============================= testProp.vue<br>
      这是测试props属性传递-{{testProp}}
      <slot name="testSlot"></slot>
    </div>
</template>

<script>
  export default {
    name: 'testProp',
    props: ['testProp']
  }
</script>

<style scoped>

</style>
