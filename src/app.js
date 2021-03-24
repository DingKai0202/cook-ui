import Vue from 'vue'
import Icon from './icon/icon.vue'
import Button from './button/button.vue'
import ButtonGroup from './button/button-group.vue'
import Input from './input/input.vue'
import Row from './row/row.vue'
import Col from './row/col.vue'
import Layout from './layout/layout.vue'
import Header from './layout/header.vue'
import Sider from './layout/sider.vue'
import Content from './layout/content.vue'
import Footer from './layout/footer.vue'
import Toast from './toast/toast.vue'
import plugin from './plugin'
import Tabs from './tab/tabs.vue'
import TabsHead from './tab/tabs-head.vue'
import TabsBody from './tab/tabs-body.vue'
import TabsContent from './tab/tabs-content.vue'
import TabsTitle from './tab/tabs-title.vue'
import Popover from './popover/popover.vue'
import Collapse from './collapse/collapse.vue'
import CollapseItem from './collapse/collapse-item.vue'
import Pager from './pagination/pager.vue'
import Table from './table/table.vue'
import Nav from './nav/nav.vue'
import NavItem from './nav/nav-item.vue'
import SubNav from './nav/sub-nav.vue'

Vue.component('c-button', Button)
Vue.component('c-icon', Icon)
Vue.component('c-button-group', ButtonGroup)
Vue.component('c-input', Input)
Vue.component('c-row', Row)
Vue.component('c-col', Col)
Vue.component('c-layout', Layout)
Vue.component('c-header', Header)
Vue.component('c-content', Content)
Vue.component('c-footer', Footer)
Vue.component('c-sider', Sider)
Vue.component('c-toast', Toast)
Vue.component('c-tabs', Tabs)
Vue.component('c-tabs-head', TabsHead)
Vue.component('c-tabs-body', TabsBody)
Vue.component('c-tabs-content', TabsContent)
Vue.component('c-tabs-item', TabsTitle)
Vue.component('c-popover', Popover)
Vue.component('c-collapse', Collapse)
Vue.component('c-collapse-item', CollapseItem)
Vue.component('c-pager', Pager)
Vue.component('c-table', Table)
Vue.component('c-nav', Nav)
Vue.component('c-nav-item', NavItem)
Vue.component('c-sub-nav', SubNav)
Vue.use(plugin)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    message: 'hi',
    selectedTab: 'woman',
    currentPage: 1,
    selectedCollapse: ['2'],
    // selected: [],
    selected: "woman",
    columns: [
      {text: '姓名', field: 'name', width: 400},
      {text: '分数', field: 'score'}
    ],
    dataSource: [
      {id: 1, name: '防范', score: 100, description: 'xxx xxx'},
      {id: 2, name: '圆圆', score: 99, description: 'yyy yyy'},
      {id: 3, name: '防范', score: 100},
      {id: 4, name: '圆圆', score: 99},
      {id: 5, name: '防范', score: 100},
      {id: 6, name: '圆圆', score: 99},
      {id: 7, name: '防范', score: 100},
      {id: 8, name: '圆圆', score: 99}
    ],
    selectedTable: [],
    orderBy: {
      score: 'true',
      name: 'up'
    },
    loading: false
  },
  created() {
    // let n = 1
    // setInterval(() => {
    //   if (n === 4) {
    //     n = 1
    //   }
    //   this.selected = n.toString()
    //   n++
    // }, 2000)
  },
  methods: {
    selectedNav(name) {
      console.log(name, 'navvvvvv');
    },
    xs(item, s) {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 1500)
      console.log('年度');
      console.log(item);
      console.log(s);
    },
    selectedItem(items) {
      console.log(items);
      this.selected = items
    },
    yyy(data) {
      console.log(data, 'yyy');
    },
    // inputChange(e) {
    //   console.log(e.target.value);
    // },
    showToast() {
      this.$toast("我是toast的内容，你好啊", 
      {
        
        closeButton: {
          text: "知道了",
          callback (toast) {
            toast.log()
            console.log("用户点击知道了");
          }
        },
        position: 'middle',
        autoClose: true,
      })
    },
    xx(object) {
      console.log('object你好');
      let {selected, item, index} = object
      console.log(index, 'asdads');
    }
  }
})
