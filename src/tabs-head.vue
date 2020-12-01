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
  created(){
    this.$emit('update:selected', 'tabs-head 抛出的数据')
    console.log("爷爷给爸爸的 eventBus");
    console.log(this.eventBus);
  }
}
</script>

<style lang="scss" scoped>
  $tab-height: 40px;
  .tabs-head {
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid red;
    > .actions-wrapper {
      margin-left: auto;
    }
  }
</style>