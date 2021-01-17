<template>
  <div class="c-slides">
    <div class="c-sliders-dots">
      <span @click="select(index)" v-for="(item, index) in childrenLength" :key="index" :class="{active: selectedIndex === index}">
        {{index}}
      </span>
    </div>
    <div class="c-slides-window" ref="window">
      <div class="c-slides-wrapper">
        <slot></slot>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'CookSlides',
  props: {
    selected: {
      type: String
    },
    autoPlay: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      childrenLength: 0,
      selectedDotIndex: null
    }
  },
  mounted () {
    this.updateChildren()
    this.playAutomatically()
    this.childrenLength = this.$children.length
  },
  updated () {
    this.updateChildren()
  },
  computed: {
    selectedIndex () {
      const names = this.$children.map(vm => vm.name)
      const itemIndex = names.indexOf(this.selected)
      if (itemIndex > 0) {
        return names.indexOf(this.selected)  
      } else {
        return 0
      }
    }
  },
  methods: {
    playAutomatically () {
      const names = this.$children.map(vm => vm.name)
      console.log(names);
      let index = names.indexOf(this.getSelected())
      setInterval(() => {
        if (index === names.length) {
          index = 0
        }
        if (this.selectedDotIndex !== null) {
          console.log(this.selectedDotIndex + 1, 'asad');
        //   index = this.selectedDotIndex + 1
          this.$emit('update:selected', names[this.selectedDotIndex + 1])
        } else {
          this.$emit('update:selected', names[index + 1])
        }
        index ++
      }, 2000)
    },
    getSelected () {
      let first = this.$children[0]
      return this.selected || first.name
    },
    updateChildren() {
      let selectedItem = this.getSelected()
      this.$children.forEach((vm) => {
        vm.selected = selectedItem
      })
    },
    select (index) {
      console.log(index);
      this.selectedDotIndex = index
      const names = this.$children.map(vm => vm.name)
      this.$emit('update:selected', names[index])
      this.selectedDotIndex = null
    }
  }
}
</script>

<style lang="scss" scoped>
  .c-slides {
    // display: inline-block;
    // border: 10px solid blue;
    height: 200px;
    width: 100px;
    overflow: hidden;
    box-sizing: content-box;
    &-window {
    //   height: 200px;
    //   width: 100px;
    }
    &-wrapper {
      position: relative;
    //   border: 1px solid blue;
    }
    .c-sliders-dots {
      .active {
        background:coral ;
      }
    }
  }
</style>