<template>
  <div class="c-nav">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CookNav",
  provide () {
    return {
      root: this
    }
  },
  props: {
    selected: {
      type: String
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      items: []
    }
  },
  mounted () {
    this.updateChildren()
    this.listenToChildren()
  },
  updated () {
    this.listenToChildren()
  },
//   computed: {
//     items () {
//       return this.$children.filter(vm => vm.$options.name === 'CookNavItem')
//     }
//   },
  methods:{
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
  .c-nav {
    display: flex;
    border: 1px solid red;
  }
</style>