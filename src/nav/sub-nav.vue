<template>
  <div class="c-sub-nav" :class="{active, vertical}" v-click-outside="close">
    <span class="c-sub-nav-label" @click="onClick" :class="{labelactive:active}" ref="label">
      <slot name="title"></slot>
      <span class="c-sub-nav-icon c-sub-nav-open" v-if="open">
        <c-icon class="left" name="right"></c-icon>
      </span>
      <span class="c-sub-nav-icon c-sub-nav-close" v-if="!open">
        <c-icon name="right"></c-icon>
      </span>
    </span>
    <template v-if="vertical">
      <transition @enter="enter" @leave="leave"
        @after-leave="afterLeave"
        @after-enter="afterEnter"
        >
        <div class="c-sub-nav-popover" :class="{vertical}" v-show="open">
          <slot></slot>
        </div>
      </transition>
    </template>
    <template v-else>
      <div class="c-sub-nav-popover" v-show="open">
        <slot></slot>
      </div>
    </template>
  </div>
</template>

<script>
import ClickOutside from '../click-outside'
import CIcon from '../icon/icon'
export default {
  name: 'CookSubNav',
  directives: {
    ClickOutside
  },
  inject: ['root', 'vertical'],
  components: {
    CIcon
  },
  data () {
    return {
      open: false
    }
  },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    active () {
      return this.root.namePath.indexOf(this.name) >= 0 ? true : false
    }
  },
  updated() {
    if (this.root.vertical) {
      if (this.root.namePath.indexOf(this.name) >= 0) {
        this.$refs.label.style.width = '1000px'
        this.$refs.label.style.background = '#fff'
      } else {
        this.$refs.label.style.background = '#fff'
      }
    }
  },
  methods: {
    afterEnter (el) {
      el.style.height = 'auto'
    },
    enter (el, done) {
      let { height } = el.getBoundingClientRect()
      el.style.height = 0
      el.getBoundingClientRect()
      el.style.height = `${height}px`
      el.addEventListener('transitionend', () => {
        done()
      })
    },
    leave: function (el, done) {
      let {height} = el.getBoundingClientRect()
      el.style.height = `${height}px`
      el.getBoundingClientRect()
      el.style.height = 0
      el.addEventListener('transitionend', () => {
        done()
      })
    },
    afterLeave: function (el) {
      el.style.height = 'auto'
    },
    onClick () {
      this.open = !this.open
      console.log(this.root.namePath.indexOf(this.name) >= 0, '你好');
    },
    close() {
      if (this.vertical) return
      this.open = false
    },
    updateNamePath () {
      this.root.namePath.unshift(this.name)
      if (this.$parent.updateNamePath) {
        this.$parent.updateNamePath()
      } else {
        // this.root.namePath = []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../_var.scss";
    .c-sub-nav {
    position: relative;
    &.vertical {
      overflow: hidden;
    }
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
      &.labelactive {
        border-bottom: 2px solid #4a90e2;
      }
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
            // margin-left: 15px;
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
//   .c-sub-nav {
//     position: relative;
//     overflow: hidden;
//     &:not(.vertical) {
//       &.active {
//         &.active {
//           &::after {
//             content: '';
//             position: absolute;
//             bottom: 0;
//             left: 0;
//             border-bottom: 2px solid #4a90e2;
//             width: 100%;
//           }
//         }
//       }
//     }
//     &-label {
//       padding: 10px 20px;
//       display: inline-block;
//       vertical-align: top;
//       &.labelactive {
//         border-bottom: 2px solid #4a90e2;
//       }
//     }

//     &-popover {
//       position: absolute;
//       top: 100%;
//       left: 0;
//       margin-top: 1px;
//       white-space: nowrap;
//       background: white;
//       box-shadow: 0 0 3px fade-out(black, 0.8);
//       border-radius: $border-radius;
//       font-size: $font-size;
//       color: $light-color;
//       min-width: 4em;
//       &.vertical {
//         position: static;
//         border-radius: 0;
//         border: none;
//         box-shadow: none;
//         margin-left: 20px;
//         transition: height 1s;
//         overflow: hidden;
//         .c-sub-nav {
//           .vertical {
          
//           }
//         }
//       }
//     }
//     &-open {
//       color: #4a90e2;
//       vertical-align: middle;
//       margin-left: .2em;
      
//       .c-icon {
//         transform:rotate(90deg);
//         transition: transform 0.4s;
//       }
//     }
//     &-close {
//       vertical-align: middle;
//       margin-left: .2em;
//       transition: all 0.4s;
//     }
//     .c-sub-nav .c-sub-nav-popover {
//       top: 0;
//       left: 100%;
//       margin-left: 4px;
//       .c-sub-nav-label {
//         display: flex;
//         align-items: center;
//       }
//       .c-sub-nav-icon {
//         display: flex;
//       }
//     }
//   }
</style>
