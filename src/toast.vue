<template>
  <div class="toast" :class="toastClasses">
    <slot></slot>
    <span class="close" v-if="closeButton" @click="onClickClose">
      <div class="line"></div>
      {{closeButton.text}}
    </span>
  </div>
</template>

<script>
export default {
  name: 'CookToast',
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 2
    },
    closeButton: {
      type: Object,
      default () {
        return {
          text: '关闭', 
          callback: undefined
        }
      }
    },
    position: {
      type: String,
      default: 'top',
      validator (value) {
        console.log(value);
        return ['top', 'bottom', 'middle'].indexOf(value) >= 0
      }
    }
  },
  created () {
    console.log(this.closeButton, "btn");
  },
  mounted () {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.autoCloseDelay * 1000)
      }
  },
  computed: {
    toastClasses() {
      return {
        [`position-${this.position}`]: true
      }
    }
  },
  methods: {
    close() {
      this.$el.remove()
      this.$destroy()
    },
    log () {
      console.log("测试");
    },
    onClickClose() {
      this.close()
      if (this.closeButton && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback(this)   //this === toast实例
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  $font-size: 14px;
  $toast-min-height: 40px;
  $toast-bg: rgba(0, 0, 0, 0.75);
  .toast{
      font-size: $font-size;
      min-height: $toast-min-height;
      line-height: 1.8;
      position: fixed;
      top: 10px;
      left: 50%;
      display: flex;
      color: white;
      align-items: center;
      background: $toast-bg;
      border-radius: 4px;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
      padding: 8px 16px;
      &.position-top{
        top: 0;
        transform: translateX(-50%);
      }
      &.position-bottom{
        bottom: 0;
        transform: translateX(-5%);
      }
      &.position-middle{
        top: 50%;
        transform: translate(-50%, -50%);
      }
      .close {
        padding-left: 16px;
        position: relative;
      }
      .line{
        height: 100%;
        border-left: 1px solid #666;
        margin-left: 16px;
        position: absolute;
        left: -8px;
      }

  }


</style>