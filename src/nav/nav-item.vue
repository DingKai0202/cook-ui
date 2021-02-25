<template>
  <div class="c-nav-item" :class="{selected, vertical}" @click="onClick"
    :data-name="name">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CookNavItem',
  inject: ['root', 'vertical'],
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
    // this.eventBus.$emit('add:item', this)
  },
  methods: {
    onClick () {
        console.log(this.name, '点击');
      this.root.namePath = []
      this.$parent.updateNamePath && this.$parent.updateNamePath()
      this.$emit('update:selected', this.name)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../_var.scss";
  .c-nav-item {
    padding: 10px 20px;
    position: relative;
    &.selected {
      color: #4a90e2;
      background: $grey;
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
