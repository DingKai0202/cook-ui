<template>
  <div class="wrapper" :class="{'error': error}">
    <input :value="value" type="text" :disabled="disabled" :readonly="readonly"
      @change="$emit('change', $event.target.value)"
      @input="$emit('input', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
    >
    <template v-if="error">
      <icon name="error" class="icon-error"></icon>
      <span class="errorMessage">{{error}}</span>
    </template>
  </div>
</template>

<script>
import Icon from '../icon/icon'

export default {
  components: {Icon},
  name: 'CookInput',
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
  $height : 32px;
  $border-color: #999;
  $border-color-hover: #666;
  $font-size: 12px;
  $red: #f14530;
  .wrapper{
    font-size: $font-size;
    display: inline-flex;
    align-items: center;
    > *{
      margin-right: .5em;
      &:last-child{
        margin-right: 0;
      }
    }
    > input{
      height: 32px;
      border: 1px solid $border-color;
      border-radius: 4px;
      padding: 0 8px;
      font-size: inherit;
      $box-shadow-color: rgba(0, 0, 0, 0.3);
      &:hover{
        border-color: $border-color-hover;
      }
      &:focus{
        box-shadow: inset 0 1px 3px $box-shadow-color;
        outline: none;
      }
      &[disabled], &[readonly] {
        border-color: #bbb;
        color: #bbb;
        cursor: not-allowed;
      }
    }
    &.error{
      >input{
        border-color: $red;
      }
    }
    .icon-error{
      fill : $red;
    }
    .errorMessage{
      color: $red;
    }
  }

</style>