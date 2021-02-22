import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'
import Layout from './layout.vue'
import Header from './header.vue'
import Sider from './sider.vue'
import Content from './content.vue'
import Footer from './footer.vue'
import Toast from './toast.vue'
import plugin from './plugin'
import Tabs from './tabs.vue'
import TabsHead from './tabs-head.vue'
import TabsBody from './tabs-body.vue'
import TabsPane from './tabs-pane.vue'
import TabsItem from './tabs-item.vue'
import Popover from './popover.vue'
import Collapse from './collapse.vue'
import CollapseItem from './collapse-item.vue'
import Cascader from './cascader.vue'
import Slides from './slides.vue'
import SlidesItem from './slides-item.vue'
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
Vue.component('c-tabs-pane', TabsPane)
Vue.component('c-tabs-item', TabsItem)
Vue.component('c-popover', Popover)
Vue.component('c-collapse', Collapse)
Vue.component('c-collapse-item', CollapseItem)
Vue.component('c-cascader', Cascader)
Vue.component('c-slides', Slides)
Vue.component('c-slides-item', SlidesItem)
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
    // selected: ['2'],
    // selected: [],
    source: [
      {
        name: '浙江',
        label: '1',
        children: [
          {
            name: '杭州',
            label: '2',
            children: [
              // {name: '上城',label: '3',},
              // {name: '下城',label: '4',},
              // {name: '江干',label: '5',}
            ]
          },
          {
            name: '嘉兴',
            label: '6',
            children: [
              {name: '南湖',label: '7',},
              {name: '秀洲',label: '8',},
              {name: '嘉善',label: '9',}
            ]
          },
        ]
      },
      {
        name: '福建',
        label: '6',
        children: [
          {
            name: '福州',
            label: '6',
            children: [
              {name: '鼓楼',label: '1',},
              {name: '台江',label: '1',},
            ]
          },
        ]
      },
            {
        name: '福建2',
        label: '1',
        children: [
          {
            name: '福州2',
            label: '1',
            children: [
              {name: '鼓楼',label: '1',},
              {name: '台江',label: '1',},
              {name: '苍山',label: '1',},
              {name: '鼓楼',label: '1',},
              {name: '台江',label: '1',},
              {name: '鼓楼',label: '1',},
              {name: '台江',label: '1',},
              {name: '苍山',label: '1',},
              {name: '鼓楼',label: '1',},
              {name: '台江',label: '1',},
              {name: '鼓楼',label: '1',},
              {name: '台江',label: '1',},
              {name: '苍山',label: '1',},
              {name: '鼓楼',label: '1',},
              {name: '台江',label: '1',},
            ]
          },
        ]
      },
      // {
      //   name: '浙江',
      //   children: [
      //     {
      //       name: '杭州',
      //       children: [
      //         {name: '上城'},
      //         {name: '下城'},
      //         {name: '江干'}
      //       ]
      //     },
      //     {
      //       name: '嘉兴',
      //       children: [
      //         {name: '南湖'},
      //         {name: '秀洲'},
      //         {name: '嘉善'}
      //       ]
      //     },
      //   ]
      // },
      // {
      //   name: '福建',
      //   children: [
      //     {
      //       name: '福州',
      //       children: [
      //         {name: '鼓楼'},
      //         {name: '台江'},
      //       ]
      //     },
      //   ]
      // },
      //       {
      //   name: '福建2',
      //   children: [
      //     {
      //       name: '福州2',
      //       children: [
      //         {name: '鼓楼'},
      //         {name: '台江'},
      //         {name: '苍山'},
      //         {name: '鼓楼'},
      //         {name: '台江'},
      //       ]
      //     },
      //   ]
      // },
      // {
      //   name: '浙江',
      //   children: [
      //     {
      //       name: '杭州',
      //       children: [
      //         {name: '上城'},
      //         {name: '下城'},
      //         {name: '江干'}
      //       ]
      //     },
      //     {
      //       name: '嘉兴',
      //       children: [
      //         {name: '南湖'},
      //         {name: '秀洲'},
      //         {name: '嘉善'}
      //       ]
      //     },
      //   ]
      // },
      // {
      //   name: '福建',
      //   children: [
      //     {
      //       name: '福州',
      //       children: [
      //         {name: '鼓楼'},
      //         {name: '台江'},
      //       ]
      //     },
      //   ]
      // },
      //       {
      //   name: '福建2',
      //   children: [
      //     {
      //       name: '福州2',
      //       children: [
      //         {name: '鼓楼'},
      //         {name: '台江'},
      //         {name: '苍山'},
      //         {name: '鼓楼'},
      //         {name: '台江'},
      //       ]
      //     },
      //   ]
      // }
    ],
    selected: "home",
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
    yyy() {
      console.log('yyy');
    },
    // inputChange(e) {
    //   console.log(e.target.value);
    // },
    showToast() {
      this.$toast("我是toast国库鬼鬼哦豁【铝合金撒大大说按时玩儿翁偶还就弄里扩女女女女女女女女女女女女女女贫困【贫困【贫困【贫困", 
      {
        
        closeButton: {
          text: "知道了",
          callback (toast) {
            toast.log()
            console.log("用户点击知道了");
          }
        },
        position: 'middle',
        autoClose: 5,
      })
    },
    xx(object) {
      console.log('object你好');
      let {selected, item, index} = object
      console.log(index, 'asdads');
    }
  }
})



// import chai from 'chai'
// import spies from 'chai-spies'
// chai.use(spies)

// //单元测试
// {
//   const Constructor = Vue.extend(Button)
//   const vm = new Constructor({
//     propsData: {
//       icon: 'settings'
//     }
//   })
//   button.$mount('#test')
//   let useElement = button.$el.querySelector('use')
//   let href = useElement.getAttribute('xlink:href')
//   expect(href).to.eq('#i-settings')
//   vm.$el.remove()
//   vm.$destory()
// }

// {
//   const Constructor = Vue.extend(Button)
//   const vm = new Constructor({
//     propsData: {
//       icon: 'settings',
//       loading: true
//     }
//   })
//   vm.$mount()
//   let useElement = button.$el.querySelector('use')
//   let href = useElement.getAttribute('xlink:href')
//   expect(href).to.eq('#i-loading')
//   vm.$el.remove()
//   vm.$destory()
// }

// {
//   const div = document.createElement('div')
//   document.body.appendChild(div)
//   const Constructor = Vue.extend(Button)
//   const vm = new Constructor({
//     propsData: {
//       icon: 'settings'
//     }
//   })
//   vm.$mount(div)
//   let svg = button.$el.querySelector('svg')
//   let { order } = window.getComputedStyle(svg)
//   expect(order).to.eq("1")
//   vm.$el.remove()
//   vm.$destory()
// }

// {
//   const div = document.createElement('div')
//   document.body.appendChild(div)
//   const Constructor = Vue.extend(Button)
//   const vm = new Constructor({
//     propsData: {
//       icon: 'settings',
//       iconPosition: 'right'
//     }
//   })
//   vm.$mount(div)
//   let svg = button.$el.querySelector('svg')
//   let { order } = window.getComputedStyle(svg)
//   expect(order).to.eq("2")
//   vm.$el.remove()
//   vm.$destory()
// }

// {
//   const Constructor = Vue.extend(Button)
//   const vm = new Constructor({
//     propsData: {
//       icon: 'settings',
//       iconPosition: 'right'
//     }
//   })
//   vm.$mount()
//   let spy = chai.spy(function() {
    
//   })

//   vm.$on('click', spy)
//   let button = cButton.$el
//   button.click()
//   expect(spy).to.have.been.called()
// }