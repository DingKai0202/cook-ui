<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script>
// import Vue from 'vue'
// Vue.prototype.$toast = function () {
//   console.log('我是toast');
// }
export default {
  name: 'CookToast'
}
</script>

<style lang="scss" scoped>
  $font-size: 14px;
  $toast-height: 40px;
  $toast-bg: rgba(0, 0, 0, 0.75);
  .toast{
      font-size: $font-size;
      height: $toast-height;
      line-height: 1.8;
      position: fixed;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      color: white;
      align-items: center;
      background: $toast-bg;
      border-radius: 4px;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
      padding: 0 16px;
  }
</style>