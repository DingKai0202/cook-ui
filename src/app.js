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
Vue.use(plugin)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    message: 'hi'
  },
  created() {
   
  },
  methods: {
    inputChange(e) {
      console.log(e.target.value);
    },
    showToast() {
      this.$toast("我是toast")
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