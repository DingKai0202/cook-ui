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
      this.root.namePath = []
      this.$parent.updateNamePath && this.$parent.updateNamePath()
      this.$emit('add:selected', this.name)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../_var.scss";
  .c-nav-item {
    padding: 10px 20px;
    position: relative;
    &:not(.vertical) {
      &.selected {
        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            border-bottom: 2px solid #4a90e2;
            width: 100%;
        }
      }
    }
    &.vertical {
      &.selected {
        color: #4a90e2;
        background: $grey;
      }
    }
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  .c-sub-nav .c-nav-item:not(.vertical) {
    // color: $light-color;
    &.selected {
      background: $grey;
      color: #4a90e2;
      &::after {
        display: none;
      }
    }
  }
</style>