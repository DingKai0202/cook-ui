<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CookTabsHead',
  inject: ['eventBus'],
  created () {
    console.log(this.eventBus, 'eventBus');
  }
}
</script>

<style lang="scss" scoped>
  $tab-height: 40px;
  .tabs-head {
    display: flex;
    height: $tab-height;
    border-bottom: 1px solid #ddd;
    > .actions-wrapper {
      margin-left: auto;
    }
  }
</style>