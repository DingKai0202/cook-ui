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
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator (value) {
        return ['horizontal', 'vertical'].indexOf(value) >= 0
      }
    }
  },
  data () {
    return {
      eventBus: new Vue()
    }
  },
  provide () {
    return {
      eventBus: this.eventBus
    }
  },
  mounted () {
    if (this.$children.length === 0) {
      console.warn('tabs的子组件应该是tabs-head和tabs-nav，但你没有写子组件')
    }

    this.$children.forEach((vm) => {
      if (vm.$options.name === 'CookTabsHead') {
        vm.$children.forEach((childVm) => {
          if (childVm.$options.name === 'CookTabsItem' && childVm.name === this.selected) {
            console.log(childVm, 'vm');
            this.eventBus.$emit('update:selected', this.selected, childVm)
          }
        })
      }
    })
  }
}
</script>

<style>

</style>