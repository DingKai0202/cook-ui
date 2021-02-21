<template>
  <svg class="c-icon" @click="$emit('click', $event)">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
import './svg'
export default {
  name: 'CookIcon',
  props: {
    name: String
  }
}
</script>

<style lang="scss" scoped>
  .c-icon{
    width: 1em;
    height: 1em;
  }
</style>