<template>
  <div class="c-sub-nav">
    <span @click="onClick">
      <slot name="title"></slot>
    </span>
    <div v-show="open" class="c-sub-nav-popover">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CookSubNav',
  data() {
    return {
      open: false
    }
  },
  methods: {
    onClick () {
      this.open = !this.open
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../_var.scss";
  .c-sub-nav {
    position: relative;
    &:not(.vertical) {
      &.active {
        &.active {
          &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            border-bottom: 2px solid #4a90e2;
            width: 100%;
          }
        }
      }
    }
    &-label {
      padding: 10px 20px;
      display: inline-block;
      vertical-align: top;
    }

    &-popover {
      position: absolute;
      top: 100%;
      left: 0;
      margin-top: 1px;
      white-space: nowrap;
      background: white;
      box-shadow: 0 0 3px fade-out(black, 0.8);
      border-radius: $border-radius;
      font-size: $font-size;
      color: $light-color;
      min-width: 4em;
      &.vertical {
        position: static;
        border-radius: 0;
        border: none;
        box-shadow: none;
        margin-left: 10px;
        transition: height 1s;
        overflow: hidden;
        .c-sub-nav {
          .vertical {
            margin-left: 15px;
          }
        }
      }
    }
    &-open {
      color: #4a90e2;
      vertical-align: middle;
      margin-left: .2em;
      
      .c-icon {
        transform:rotate(90deg);
        transition: transform 0.4s;
      }
    }
    &-close {
      vertical-align: middle;
      margin-left: .2em;
      transition: all 0.4s;
    }
    .c-sub-nav .c-sub-nav-popover {
      top: 0;
      left: 100%;
      margin-left: 4px;
      .c-sub-nav-label {
        display: flex;
        align-items: center;
      }
      .c-sub-nav-icon {
        display: flex;
      }
    }
  }
</style>