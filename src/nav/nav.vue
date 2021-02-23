<template>
  <div class="c-nav" :class="{vertical}" ref="nav">
    <slot></slot>
    {{namePath}}
  </div>
</template>

<script>
export default {
  name: "CookNav",
  provide () {
    return {
      root: this,
      vertical: this.vertical
    }
  },
  props: {
    selected: {
      type: String
    },
    multiple: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 200
    }
  },
  data() {
    return {
      items: [],
      namePath: []
    }
  },
  mounted () {
    this.updateChildren()
    this.listenToChildren()
    if (this.width) {
      this.$refs.nav.style.width = `${this.width}px`
    }
  },
  updated () {
    this.listenToChildren()
  },
  computed: {
    
    // items () {
    //   return this.$children.filter(vm => vm.$options.name === 'CookNavItem')
    // }
  },
  methods:{
    enter (el ,done) {
      let { height } = el.getBoundingClientRect()
      el.style.height = 0
      el.getBoundingClientRect()
      el.style.height = `${height}px`
      el.addEventListener('transition')
    },
    addItem(vm) {
      this.items.push(vm)
    },
    updateChildren () {
      this.items.forEach(vm => {
        if (this.selected === vm.name) {
            vm.selected = true
        } else {
            vm.selected = false
        }
      })
    },
    listenToChildren () {
      this.items.forEach(vm => {
        if (this.selected === vm.name) {
            vm.selected = true
        } else {
            vm.selected = false
        }
        this.items.forEach(vm => {
            vm.$on('add:selected', (name) => {
            this.$emit('update:selected', name)
            })
        })
      });
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