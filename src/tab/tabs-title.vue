<template>
  <transition name="show">
    <div class="tabs-title" @click="onClick" :class="classes" :data-name="name">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'CookTabsTitle',
  inject: ['eventBus'],
  data () {
    return {
      active: false
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String|Number,
      required: true
    }
  },
  computed: {
    classes () {
      return {
        active: this.active,
        disabled: this.disabled
      }
    }
  },
  created () {
    if (this.disabled) {return}
    this.eventBus.$on('update:selected', (name => {
      console.log(name, 'asdasdasd');
      if (name === this.name) {
        this.active = true
      } else {
        this.active = false
      }
    }))
  },
  methods: {
    onClick() {
      if (this.disabled) {return}
      this.eventBus.$emit('update:selected', this.name)
    }
  }
}
</script>

<style lang="scss" scoped>
  .tabs-title {
    flex-shrink: 0;
    padding: 0 2em;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    // font-weight: bold;
    &.active {
      color: #4a90e2;
      border-top: 3px solid #fff;
      border-bottom: 3px solid #4a90e2;
      box-sizing: border-box;
      font-weight: bold;
    }
    &.disabled {
      color: grey;
    }
  }
  .show-enter-active, .show-leave-active {
    transition: all 1s;
  }
  .show-enter {
    border-top: 2px solid red;
  }
  .show-leave-to {
    // transform: translateX(-100%);
    // border-top: 2px solid red;
  }

</style>