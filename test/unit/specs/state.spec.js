import store from '@/store'

describe('store', () => {
  describe('state', () => {
    it('should be initialize keys with default values', () => {
      expect(store.state.destination === '')
      expect(store.state.songsMap === {})
    })
    it('should have a key "nowplaying" with proper data structure', () => {
      expect(typeof (store.state.nowplaying) === 'object')
      expect(store.state.nowplaying.current === {})
    })
  })
})
