import { shallowMount } from '@vue/test-utils'
import TitleBar from '@/components/titlebar'

const wrapper = shallowMount(TitleBar)

describe('titlebar.vue', () => {
  it('should render correct title in the titlebar', async () => {
    wrapper.setData({
      title: 'Hello World'
    })

    await wrapper.vm.$nextTick()
    expect(wrapper.vm.$el.querySelector('.song-title').textContent).to.contain('Hello World')
  })

  it('should update when song is updated', async () => {
    wrapper.setData({
      title: 'Hello World'
    })

    await wrapper.vm.$nextTick()
    expect(wrapper.vm.$el.querySelector('.song-title').textContent).to.contain('Hello World')

    wrapper.setData({
      title: 'Foo Bar'
    })

    await wrapper.vm.$nextTick()
    expect(wrapper.vm.$el.querySelector('.song-title').textContent).to.contain('Foo Bar')
  })

  it('should show default title when there is no song', async () => {
    wrapper.setData({
      title: ''
    })

    await wrapper.vm.$nextTick()
    expect(wrapper.vm.$el.querySelector('.song-title').textContent).to.contain('MJam: A Modern Music Player')
  })
})
