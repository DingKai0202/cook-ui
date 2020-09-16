<template>
  <transition name="slide">
    <div class="sider" v-if="visible">
        <slot></slot>
        <button @click="visible=false">Close</button>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'CookSider',
  data () {
    return {
      visible: true
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  .sider {
    position: relative;
    > button {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  .slide-enter-active, .slide-leave-active {
    transition: transform .3s;
  }
  .slide-enter, .slide-leave-to {
    margin-left: -200px;
  }
</style>