<template>
  <div class="popover" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible"
      :class="{[`position-${position}`]: true}"
    >
      <slot name="content" :close="_close"></slot>
    </div>   
    <span ref="triggerWrapper" style="display: inline-block">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "CookPopover",
  data() {
    return {
      visible: false
    }
  },
  props: {
    position: {
      type: String,
      default: 'top',
      validator (value) {
        return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
      }
    },
    trigger: {
      type: String,
      default: 'click',
      validator (value) {
        return ['click', 'hover'].indexOf(value) >= 0
      }
    }
  },
  mounted () {
    if (this.trigger === 'click') {
      this.$refs.popover.addEventListener('click', this.onClick)
    } else if (this.trigger === 'hover'){
      this.$refs.popover.addEventListener('mouseenter', this._open)
      this.$refs.popover.addEventListener('mouseleave', this._close)
    }
  },
  destroyed () {
    if (this.trigger === 'click') {
      this.$refs.popover.removeEventListener('click', this.onClick)
    } else {
      this.$refs.popover.removeEventListener('mouseenter', this._open)
      this.$refs.popover.removeEventListener('mouseleave', this._close)
    }
  },
  methods: {
    _positionContent() {
      const { contentWrapper } = this.$refs
      document.body.appendChild(contentWrapper)
      let {width,height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
      if (this.position === 'top') {
        contentWrapper.style.left = left + window.scrollX + 'px'
        contentWrapper.style.top = top + window.scrollY + 'px'
      } else if (this.position === 'bottom') {
        contentWrapper.style.left = left + window.scrollX + 'px'
        contentWrapper.style.top = top + height + window.scrollY + 'px'
      } else if (this.position === 'left') {
        contentWrapper.style.left = left + window.scrollX + 'px'
        let { height: height2 } = contentWrapper.getBoundingClientRect()
        contentWrapper.style.top = top + height/2 + window.scrollY + (height - height2) /2 + 'px'
      } else if (this.position === 'right') {
        let { height: height2 } = contentWrapper.getBoundingClientRect()
        contentWrapper.style.left = left + window.scrollX + width + 'px'
        contentWrapper.style.top = top + height/2 + window.scrollY + (height - height2) /2 + 'px'
      }
      
    },
    onClickDocument(e) {
      if (this.$refs.popover && (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))) {
        return
      } else if (this.$refs.contentWrapper && (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))) {
        return
      } else {
        this._close()
      }
    },
    _open() {
      this.visible = true
      this.$nextTick(() => {
        this._positionContent()
        document.addEventListener('click', this.onClickDocument)
      })
    },
    _close() {
      this.visible = false
      document.removeEventListener('click', this.onClickDocument)
    },
    onClick (event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        console.log('切换 visible', this.visible);
        if (this.visible === true) {
          this._close()
        } else {
          this._open()
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  $border-color: #333; 
  $border-radious: 4px;
  .popover{
    display: inline-block;
    vertical-align: top;
    position: relative;
  }
  .content-wrapper {
    position: absolute;
    border: 1px solid $border-color;
    border-radius: $border-radious;
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
    background: white;
    margin-top: -10px;
    padding: .5em 1em;
    max-width: 20em;
    word-break: break-all;
    &.position-top {
      transform: translateY(-100%);
      margin-top: -10px;
      &::before {
        content: '';
        display: block;
        border: 10px solid transparent;
        border-top-color: black;
        width: 0px;
        height: 0px;
        position: absolute;
        top: 100%;
        left: 10px;
        border-bottom: none;
      }
      &::after {
        content: '';
        display: block;
        border: 10px solid transparent;
        border-top-color: white;
        width: 0;
        height: 0;
        position: absolute;
        top: calc(100% - 1px);
        left: 10px;
        border-bottom: none;
      }
    }
    &.position-bottom {
      margin-top: 10px;
      &::before {
        content: '';
        display: block;
        border: 10px solid transparent;
        border-bottom-color: black;
        width: 0px;
        height: 0px;
        position: absolute;
        bottom: 100%;
        left: 10px;
        border-top: none;
      }
      &::after {
        content: '';
        display: block;
        border: 10px solid transparent;
        border-bottom-color: white;
        width: 0;
        height: 0;
        position: absolute;
        bottom: calc(100% - 1px);
        left: 10px;
        border-top: none;
      }
    } 
    &.position-left {
      transform: translateX(-100%);
      margin-left: -10px;
      &::before, &::after {
        content: '';
        display: block;
        border: 10px solid transparent;
        border-left-color: white;
        width: 0;
        height: 0;
        position: absolute;
        left: 100%;
        top: 50%;
        transform: translateY(-50%);
        border-right: none;
      }
      &::before {
        border-left-color: black;
        left: 100%;
      }
      &::after{
        border-left-color: white;
        left: calc(100% - 1px);
      }
    }
    &.position-right {
      margin-left: 10px;
      &::before, &::after {
        content: '';
        display: block;
        border: 10px solid transparent;
        border-right-color: white;
        width: 0;
        height: 0;
        position: absolute;
        right: 100%;
        top: 50%;
        transform: translateY(-50%);
        border-left: none;
      }
      &::before {
        border-right-color: black;
        right: 100%;
      }
      &::after{
        border-right-color: white;
        right: calc(100% - 1px);
      }
    }
  }

</style>