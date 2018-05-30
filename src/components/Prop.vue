<template>
  <div>
    <test-prop testProp="test">
      <span slot="testSlot">
        <h5>这是测试slot插槽</h5>
      </span>
    </test-prop>
  </div>
</template>

<script>
  import TestProp from './TestProp'

  export default {
    name: 'Prop',
    components: {
      TestProp
    }
  }
</script>

<style scoped>

</style>
