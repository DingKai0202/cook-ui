import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon'

Vue.component('c-button', Button)
Vue.component('c-icon', Icon)

new Vue({
  el: '#app',
  data: {
    loading1: false
  }
})