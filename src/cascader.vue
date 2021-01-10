<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
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
export default {
  name: 'CookCascader',
  components: {
    CascaderItems
  },
  props: {
    source: {
      type: Array
    },
    selected: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      popoverVisible: false,
    }
  },
  methods: {
    onUpdateSelected (newSelected) {
      console.log(newSelected, '选中item');
      this.$emit('update:selected', newSelected)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "var";
  .cascader {
    position: relative;
    .trigger {
      border: 1px solid red;
      height: 32px;
      width: 100px;
    }
    .popover-wrapper {
      @extend .box-shadow;
      position: absolute;
      top: 100%;
      background: #fff;
      display: flex;
      padding: 0 .5em;
    }
  }
</style>