import RightBar from '@/components/rightbar'
import { shallowMount } from '@vue/test-utils'

const wrapper = shallowMount(RightBar)

describe('rightbar.vue', () => {
  describe('Frame Title', () => {
    it('should show correct title in the column', () => {
      expect(wrapper.vm.$el.querySelector('h4').textContent === 'Artists')
    })
  })
  describe('List of artists', () => {
    it('should render all artist names in the column', async () => {
      wrapper.setData({
        artists: [
          'The Vamps',
          'The Chainsmokers',
          'Shawn Mendes'
        ]
      })

      await wrapper.vm.$nextTick()
      expect(wrapper.vm.$el.querySelectorAll('div.artist-name').length === 3)
    })

    it('should render correct artist names in the column', async () => {
      wrapper.setData({
        artists: [
          'The Vamps',
          'The Chainsmokers',
          'Shawn Mendes'
        ]
      })

      await wrapper.vm.$nextTick()

      expect(wrapper.vm.$el.querySelectorAll('div.artist-name')[0].textContent === 'The Vamps')
      expect(wrapper.vm.$el.querySelectorAll('div.artist-name')[1].textContent === 'The Chainsmokers')
      expect(wrapper.vm.$el.querySelectorAll('div.artist-name')[2].textContent === 'Shawn Mendes')
    })
  })
})
