<template>
  <div class="cook-pager">
    <span class="cook-pager-nav prev" 
      :class="{disabled:currentPage === 1}"
      @click="onClickPage(currentPage-1)"
    >
      <c-icon name="left"></c-icon>
    </span>
    <template
      v-for="(page, index) in pages" 
    >
      <template v-if="page === currentPage">
        <span class="cook-pager-item current" :key="index">{{page}}</span>
      </template>
      <template v-else-if="page === '...'">
        <div class="cook-pager-sepator" :key="index">...</div>
      </template>
      <template v-else>
        <span href="#" class="cook-pager-item other" @click="onClickPage(page)" :key="index">{{page}}</span>
      </template>
    </template>
    <span class="cook-pager-nav next" 
      :class="{disabled: currentPage === totalPage}"
      @click="onClickPage(currentPage+1)"
    >
      <c-icon name="right"></c-icon>
    </span>
  </div>
</template>

<script>
import CIcon from '../icon/icon'
export default {
  name: "CookPager",
  components: {
    CIcon
  },
  props: {
    totalPage:{
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    hideIfOnePage: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      
    }
  },
  computed: {
    pages (){
      let tempPages = [] 
      
      if (this.totalPage > 5) {
        if (this.currentPage === 1) {
          tempPages = [this.totalPage,this.currentPage, this.currentPage +1, this.currentPage + 2, this.currentPage + 3]
        } else if (this.currentPage === 2) {
          tempPages = [this.totalPage,1, this.currentPage, this.currentPage +1, this.currentPage + 2]
        } else if (this.currentPage === this.totalPage) {
          tempPages = [this.totalPage,1, this.currentPage, this.currentPage  - 1, this.currentPage - 2, this.currentPage - 3]
        } else if (this.currentPage === this.totalPage - 1) {
          tempPages = [this.totalPage,1, this.currentPage, this.currentPage - 1, this.currentPage - 2]
        } else {
          tempPages = [1, this.totalPage,this.currentPage, this.currentPage - 1, this.currentPage + 1]
        }
      } else{
        for(let i=1; i <= this.totalPage; i++) {
          tempPages.push(i)
        }
      }
 
      let u = unique(tempPages.filter((n) => n >= 1 && n <= this.totalPage).sort((a, b) => a-b))
      let pages = u.reduce((prev, current, index, array) => {
        if (array[index+1] !== undefined && array[index+1] - array[index] > 1) {
          prev.push(current)
          prev.push('...')
        } else {
          prev.push(current)
        }
        return prev
      }, [])
      return pages
    }
  },
  methods: {
    onClickPage (n) {
      if (n >= 1 && n <= this.totalPage) {
        this.$emit('update:currentPage', n)
      }
    }
  }
}
function unique (array) {
  const object = {}
  array.map((number) => {
    object[number] = true
  })
  return Object.keys(object).map((s) => parseInt(s, 10))
}
</script>

<style lang="scss" scoped>
  @import "../_var.scss";
  .cook-pager {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    user-select: none;
    $width: 20px;
    $height: 20px;
    $font-size: 12px;
    &-separator {
      width: $width;
      font-size: $font-size;
    }
    &-item {
      border: 1px solid #e1e1e1;
      border-radius: $border-radius;
      padding: 0 4px;
      display: inline-block;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      min-width: $width;
      height: $height;
      margin:0 4px;
      cursor: pointer;
      &.current, &:hover {
        border-color: $blue;
      }
      &.separator {
        border: none;
      }
    }
    &-nav{
      margin: 0 4px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      background: $grey;
      height: $height;
      width: $width;
      border-radius: $border-radius;
      font-size: $font-size;
      &.disabled {
        svg {
          fill: darken($color:$grey, $amount: 30%)
        }
      }
    }
  }
</style>