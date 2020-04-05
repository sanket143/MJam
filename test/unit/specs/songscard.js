import { shallowMount } from '@vue/test-utils'
import SongCard from '@/components/sub/songcard'

const wrapper = shallowMount(SongCard)

describe('titlebar.vue', () => {
  it('should show song title and song artist correctly', async () => {
    wrapper.setProps({
      song: {
        title: 'Inspite of all the danger',
        artists: ['Beatles'],
        picture: '~@/assets/mjam-default.png'
      }
    })
    wrapper.setData({
      nowplaying: {
        current: {
          src: ''
        }
      }
    })

    await wrapper.vm.$nextTick()
    expect(wrapper.vm.$el.querySelector('h6.song-title').textContent).to.contain('Inspite of all the danger')
    expect(wrapper.vm.$el.querySelector('h5.song-artist').textContent).to.contain('Beatles')
  })
})
