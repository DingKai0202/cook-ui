<template>
  <div class="tabs-content" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CookTabsContent',
  inject: ['eventBus'],
  data () {
    return {
      active: false
    }
  },
  props: {
    name: {
      type: String|Number,
      required: true
    }
  },
  computed: {
    classes() {
      return {
        active: this.active
      }
    }
  },
  created () {
    this.eventBus.$on('update:selected', (name => {
      if (name === this.name) {
        this.active = true
      } else {
        this.active = false
      }
    }))
  },
}
</script>

<style lang="scss" scoped>
  .tabs-content {
    &.active {
      background: red;
    }
  }
</style>