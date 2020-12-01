<template>
  <div class="tabs-item" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabsItem',
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
      type: String | Number,
      required: true
    }
  },
  computed: {
    classes () {
      return {
        active: this.active
      }
    }
  },
  created () {
    console.log('爷爷给孙子的 eventBus');
    this.eventBus.$on('update:selected', (name) => {
      console.log(name);
      if (name === this.name) {
        this.active = true
      } else {
        this.active = false
      }
    })
  },
  methods: {
    xxx () {
      this.eventBus.$emit('update:selected', this.name)
    }
  }
}
</script>

<style lang="scss" scoped>
  .tabs-item{
    flex-shrink: 0;
    padding: 0 1em;
    &.active {
      background: red;
    }
  }
</style>