<template>
  <div class="c-nav-item" :class="{selected}" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CookNavItem',
  inject: ['root'],
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      selected: false
    }
  },
  created () {
    this.root.addItem(this)
  },
  methods: {
    onClick() {
        console.log(this.name);
      this.$emit('add:selected', this.name)
    }
  }
}
</script>

<style lang="scss" scoped>
  .c-nav-item {
    padding: 10px 20px;
    &.selected {
      background: red;
    }
  }
</style>