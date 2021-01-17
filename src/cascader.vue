<template>
  <div class="cascader" ref="cascader" v-click-outside="close">
    <div class="trigger" @click="toggle">
      {{result || '请选择'}}
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <cascader-items 
        class="popover" 
        :items="source" 
        :selected="selected"
        @update:selected="onUpdateSelected"
      >
      </cascader-items>
    </div>
  </div>
</template>

<script>
import CascaderItems from './cascader-item'
import ClickOutside from './click-outside'
export default {
  name: 'CookCascader',
  components: {
    CascaderItems
  },
  directives: {
    ClickOutside
  },
  props: {
    source: {
      type: Array
    },
    // selected: {
    //   type: Array,
    //   default: () => {
    //     return []
    //   }
    // }
  },
  data () {
    return {
      popoverVisible: false,
      selected: []
    }
  },
  methods: {
    onUpdateSelected (newSelected) {
      console.log(newSelected, '选中item');
      let newSelectedArr = []
      newSelected.map(item => {
        newSelectedArr.push(item.label)
      })
      this.$emit('update:selected', newSelectedArr)
      this.selected = newSelected
    },
    toggle() {
      if (this.popoverVisible) {
        this.close()
      } else {
        this.open()
      }
    },
    close() {
      this.popoverVisible = false
      // document.addEventListener('click', this.onClickDocument)
    },
    open() {
      this.popoverVisible = true
      // this.$nextTick(() => {
      //   document.addEventListener('click', this.onClickDocument)
      // })
    },
    onClickDocument(e) {
      console.log(this);
      let {cascader} = this.$refs
      let {target} = e
      if (cascader === target || cascader.contains(target)) {
        return
      } else {
        this.close()
      }
    }
  },
  computed: {
    result () {
      return this.selected.map((item) => item.name).join('/')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "var";
  .cascader {
    position: relative;
    display: inline-block;
    .trigger {
      border: 1px solid $border-color;
      border-radius: 6px;
      height: 32px;
      display: inline-flex;
      align-items: center;
      padding: 0 1em;
      min-width: 10em;
    }
    .popover-wrapper {
      @extend .box-shadow;
      position: absolute;
      top: 100%;
      background: #fff;
      display: flex;
      // padding: 0 .5em;
      margin-top: 4px;
      z-index: 1;
    }
  }
</style>