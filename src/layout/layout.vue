<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CookLayout',
  data () {
    return {
      layoutClass: {
        hasSider: false
      }
    }
  },
  mounted () {
    console.log(this.$children)
    this.$children.forEach((vm) => {
      if (vm.$options.name === 'CookSider') {
        this.layoutClass.hasSider = true
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  .layout {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    // border: 1px solid #666;
    &.hasSider {
      flex-direction: row;
    }
  }
</style>