<template>
  <div class="routerProps">
    ============================= routerProps.vue<br>
    <span>{{prop}}</span>
  </div>
</template>

<script>
export default {
  name: 'routerProps',
  props: ['prop']
}
</script>

<style>
.routerProps {
  text-align:left;
  background-color: burlywood;
}
</style>
