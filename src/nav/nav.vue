<template>
  <div class="c-nav" :class="{vertical}" ref="nav">
      {{this.namePath}}
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CookNav',
  provide() {
    return {
      root: this,
      vertical: this.vertical
    }
  },
  props: {
    selected: {
      type: String,
      default: undefined
    },
    vertical: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: null
    }
  },
  data () {
    return {
      items: [],
      namePath: []
    }
  },
  mounted () {
    this.updateChild();
    this.listenToChildren()
    if (this.width) {
      this.$refs.nav.style.width = `${this.width}px`
    }
  },
  updated () {
    this.updateChild()
  },
//   computed: {
//     items () {
//       return this.$children.filter(vm => vm.$options.name === 'CookNavItem')
//     }
//   },
  methods: {
    addItem(vm) {
      this.items.push(vm)
    },
    updateChild() {
      this.items.forEach(vm => {
        if (this.selected === vm.name) {
          vm.selected = true
        } else {
          vm.selected = false
        }
      })
    },
    listenToChildren() {
      this.items.forEach(vm => {
        vm.$on('update:selected', (name) => {
          this.$emit('update:selected', name) 
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../_var.scss";
  .c-nav {
    display: flex;
    border-bottom: 1px solid $grey;
    cursor: default;
    &.vertical{
      flex-direction: column;
      border-right: 1px solid $grey;
    }
  }
</style>