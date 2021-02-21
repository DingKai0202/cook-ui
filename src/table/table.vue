<template>
  <div class="cook-table-wrapper" ref="wrapper">
    <div :style="{height, overflow: height ? 'auto': ''}" ref="tableWrapper">
      <table class="cook-table" :class="{bordered, compact, striped}" ref="table"> 
        <thead>
          <tr>
            <th v-if="expendField" :style="{width: '50px'}" class="cook-table-center"></th>
            <th v-if="checkable" :style="{width: '50px'}" class="cook-table-center">
              <input ref="allChecked" type="checkbox" @change="onChangeAllItems" :checked="areAllItemsSelected" />
            </th>
            <th v-if="numberVisible">#</th>
            <th v-for="(column) in columns" :key="column.field">
              <div class="cook-table-header">
                {{column.text}}
                <span v-if="column.field in orderBy" class="cook-table-sorter" @click="changeOrderBy(column.field)">
                  <c-icon class="sort-up" 
                    :class="{active:orderBy[column.field] ==='up'}" 
                    name="right"
                  ></c-icon>
                  <c-icon class="sort-down" 
                    :class="{active:orderBy[column.field] ==='down'}"  
                      name="right" 
                  ></c-icon>
                </span>
              </div>
            </th>
            <th ref="actionsHeader" v-if="$scopedSlots.default"></th>
          </tr>  
        </thead>
        <tbody>
          <template v-for="(item,index) in dataSource">
            <tr :key="item.id">
              <td v-if="expendField" :style="{width: '50px'}" class="cook-table-center">
                <c-icon class="cook-table-expendIcon" name="right" @click="expendItem(item.id)"></c-icon>
              </td>
              <td v-if="checkable" :style="{width: '50px'}" class="cook-table-center">
                <input type="checkbox" @change="onChangeItem(item, index, $event)" :checked="inSelectedItems(item)"  />
              </td>
              <td :style="{width: '50px'}" v-if="numberVisible">{{index+1}}</td>
              <template v-for="(column) in columns">
                <td :key="column.field" :style="{width: column.width + 'px'}">{{item[column.field]}}</td>
              </template>
              <td v-if="$scopedSlots.default">
                <div ref="actions" style="display: inline-block">
                  <slot :item="item"></slot>
                </div>
              </td>
            </tr>
            <tr v-if="inExpendedIds(item.id)" :key="`${item.id}-expend`">
              <td :colspan="columns.length + expendedCellColSpan">
                {{item[expendField] || '暂无数据'}}
              </td>
            </tr>
          </template>

        </tbody>
      </table>
    </div>
    <div v-if="loading" class="cook-table-loading">
      <c-icon name="loading"></c-icon>
    </div>
  </div>
</template>

<script>
import CIcon from '../icon'
export default {
  name: "CookTable",
  components: {
    CIcon
  },
  data() {
    return {
      expendedIds: []
    }
  },
  props: {
    expendField: {
      type: String
    },
    height: {
      type: Number
    },
    loading: {
      type: Boolean,
      default: false
    },
    orderBy: {
      type: Object,
      default: () => ({})
    },
    striped: {
      type: Boolean,
      default: true
    },
    selectedItems: {
      type: Array,
      default: () => []
    },
    compact: {
      type: Boolean,
      default: false
    },
    columns: {
      type: Array,
      required: true
    },
    dataSource: {
      type: Array,
      required: true,
      validator (array) {
        return (!array.filter(item => item.id === undefined).length > 0)
      }
    },
    numberVisible: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: false
    },
    checkable: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    selectedItems () {
      if (this.selectedItems.length === this.dataSource.length) {
        this.$refs.allChecked.indeterminate = false
      } else if (this.selectedItems.length === 0) {
        this.$refs.allChecked.indeterminate = false
      } else {
        this.$refs.allChecked.indeterminate = true
      }
    }
  },
  mounted() {
    // if (this.$scopedSlots.default) {
    //   let div = this.$refs.actions[0]
    //   let { width } = div.getBoundingClientRect()
    //   let parent = div.parentNode
    //   let styles = getComputedStyle(parent)
    //   let paddingLeft = styles.get
    // }
  },
  computed: {
    expendedCellColSpan() {
      let result = 0
      if (this.checkable){ result +=1 }
      if (this.expendField){ result +=1 }
      return result
    },
    areAllItemsSelected () {
      const a = this.dataSource.map(item => item.id).sort()
      const b = this.selectedItems.map(item => item.id).sort()
      let equal = true
      if (a.length === b.length) {
        for(let i = 0; i < a.length; i++) {
          if (a[i] !== b[i]) {
            equal = false
            break
          }
        }
        return equal
      } else {
        return false
      }
    }
  },
  methods: {
    expendItem (id) {
      if (this.inExpendedIds(id)) {
        this.expendedIds.splice(this.expendedIds.indexOf(id), 1)
      } else {
        this.expendedIds.push(id)
      }
    },
    inExpendedIds (id) {
      return this.expendedIds.indexOf(id) >= 0
    },
    changeOrderBy(key) {
      const copy = JSON.parse(JSON.stringify(this.orderBy))
      let oldValue = copy[key]
      if (oldValue === 'up') {
        copy[key] = 'down'
      } else if (oldValue === 'down') {
        copy[key] = true
      } else {
        copy[key] = 'up'
      }
      this.$emit('update:orderBy', copy)
      this.$emit('order', key, copy[key])
    },
    inSelectedItems(item) {
      return this.selectedItems.filter(i => i.id === item.id).length > 0
    }, 
    onChangeItem (item, index, e) {
      let selected = e.target.checked
      let copy = JSON.parse(JSON.stringify(this.selectedItems))
      if (selected) {
        copy.push(item)
      } else {
        copy = copy.filter(i => i.id !== item.id)
      }
      this.$emit('update:selectedItems', copy)
    },
    onChangeAllItems (e) {
      let selected = e.target.checked
      this.dataSource.map((item, index) => {
        this.$emit('update:selectedItems', selected ? this.dataSource : [])
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../_var.scss";
  $grey: darken($grey, 10%);
  .cook-table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    border-bottom: 1px solid $grey;
    // position: relative;
    &.bordered {
      border: 1px solid $grey;
      td, th {
        border: 1px solid $grey;
      }
    }
    &.compact {
      td, th {
        padding: 4px;
      }
    }
    td, th {
      border-bottom: 1px solid $grey;
      text-align: left;
      padding: 8px;
      .cook-table-sorter {
        .sort-down {
          transform: rotate(90deg);
        }
        .sort-up {
          transform: rotate(-90deg);
        }
      }
    }
    &.striped {
      tbody {
        > tr {
            &:nth-child(odd) {
            background: white;
            }
            &:nth-child(even) {
            background: lighten($color: $grey, $amount: 10%);
            }
        }
      }
    }
    &-sorter {
      display: inline-flex;
      flex-direction: column;
      margin: 0 2px;
      position: relative;
      svg {
        width: 10px;
        height: 10px;
        &.active {
          fill: $red;
          font-weight: bold;
        }
        &:first-child{
          position: absolute;
          top: -10px;
          font-size: 20px;
        }
        &:last-child{
          position: absolute;
        //   top: -5px;
        }
      }
    }
    &-header {
      display: flex;
      align-items: center;
    }
    &-wrapper {
      position: relative;
    }
    &-loading {
      background: rgba(255, 255, 255, 0.8);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        width: 40px;
        height: 40px;
        @include spin;
      }
    }
    &-copy {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      background: #ffffff;
    }
    &-expendIcon {
      width: 10px;
      height: 10px;
    }
    & &-center {
      text-align: center;
    }
  }
</style>