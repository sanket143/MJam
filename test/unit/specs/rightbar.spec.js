import Vue from 'vue'
import RightBar from '@/components/rightbar'

describe('rightbar.vue', () => {
  describe('Frame Title', () => {
    it('should show correct title in the column', () => {
      const vm = new Vue({
        el: document.createElement('div'),
        render: h => h(RightBar)
      }).$mount()

      expect(vm.$el.querySelector('h4').textContent === 'Artists')
    })
  })
  describe('List of artists', () => {
    it('should render all artist names in the column', () => {
      const vm = new Vue({
        el: document.createElement('div'),
        data: {
          artists: [
            'The Vamps',
            'The Chainsmokers',
            'Shawn Mendes'
          ]
        },
        render: h => h(RightBar)
      }).$mount()

      expect(vm.$el.querySelectorAll('div.artist-name').length === 3)
    })
    it('should render correct artist names in the column', () => {
      const vm = new Vue({
        el: document.createElement('div'),
        data () {
          return {
            artists: [
              'The Vamps',
              'The Chainsmokers',
              'Shawn Mendes'
            ]
          }
        },
        render: h => h(RightBar)
      }).$mount()

      expect(vm.$el.querySelectorAll('div.artist-name')[0].textContent === 'The Vamps')
      expect(vm.$el.querySelectorAll('div.artist-name')[1].textContent === 'The Chainsmokers')
      expect(vm.$el.querySelectorAll('div.artist-name')[2].textContent === 'Shawn Mendes')
    })
  })
})
