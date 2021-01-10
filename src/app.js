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
Vue.use(plugin)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    message: 'hi',
    selectedTab: 'woman',
    // selected: ['2'],
    selected: [],
    source: [
      {
        name: '浙江',
        children: [
          {
            name: '杭州',
            children: [
              {name: '上城'},
              {name: '下城'},
              {name: '江干'}
            ]
          },
          {
            name: '嘉兴',
            children: [
              {name: '南湖'},
              {name: '秀洲'},
              {name: '嘉善'}
            ]
          },
        ]
      },
      {
        name: '福建',
        children: [
          {
            name: '福州',
            children: [
              {name: '鼓楼'},
              {name: '台江'},
            ]
          },
        ]
      },
            {
        name: '福建2',
        children: [
          {
            name: '福州2',
            children: [
              {name: '鼓楼'},
              {name: '台江'},
              {name: '苍山'},
              {name: '鼓楼'},
              {name: '台江'},
            ]
          },
        ]
      }
    ]
  },
  created() {
  
  },
  methods: {
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