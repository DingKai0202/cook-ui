<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'CookTabs',
  props: {
    selected: {
      type: String,
      required: true
    }
  },
  data () {
    return {
       eventBus: new Vue
    }
  },
  provide () {
    return {
      eventBus: this.eventBus
    }
  },
  created () {
    this.$emit('update:selected', this.selected)
  }
}
</script>

<style>

</style>