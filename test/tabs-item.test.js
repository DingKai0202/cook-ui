const expect = chai.expect
import Vue from 'vue'
import Tabs from '../src/tab/tabs'
import TabsHead from '../src/tab/tabs-head'
import TabsBody from '../src/tab/tabs-body'
import TabsTitle from '../src/tab/tabs-title'
import TabsContent from '../src/tab/tabs-content'

Vue.component('c-tabs', Tabs)
Vue.component('c-tabs-head', TabsHead)
Vue.component('c-tabs-body', TabsBody)
Vue.component('c-tabs-title', TabsTitle)
Vue.component('c-tabs-content', TabsContent)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsContent', () => {

    it('存在', () => {
        expect(Tabs).to.exist
    })

    it('接受 name 属性', () => {
        const Constructor = Vue.extend(TabsTitle)
        const vm = new Constructor({
            propsData: {
                name: 'xxx'
            }
        }).$mount()
        expect(vm.$el.getAttribute('data-name')).to.eq('xxx')
    })

    it('接受 disabled 属性', () => {
        const Constructor = Vue.extend(TabsTitle)
        const vm = new Constructor({
            propsData: {
                disabled: true
            }
        }).$mount()
        expect(vm.$el.classList.contains('disabled')).to.be.true
        const callback = sinon.fake()
        vm.$on('click', callback)
        vm.$el.click()
        expect(callback).to.have.not.been.called
    })
})
