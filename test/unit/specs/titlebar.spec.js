import Vue from 'vue'
import TitleBar from '@/components/titlebar'

describe('titlebar.vue', () => {
  it('should render correct title in the titlebar', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      data () {
        return {
          title: 'Slow Hands - Niall Horan'
        }
      },
      render: h => h(TitleBar)
    }).$mount()

    expect(vm.$el.querySelector('.song-title').textContent).to.contain('Slow Hands - Niall Horan')
  })
})
