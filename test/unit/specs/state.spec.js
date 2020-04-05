import store from '@/store'

describe('store', () => {
  describe('@state', () => {
    it('should be initialize keys with default values', () => {
      expect(store.state.lookupDirectory === '')
      expect(store.state.songsMap === {})
    })
    it('should have a key "nowplaying" with proper data structure', () => {
      expect(typeof (store.state.nowplaying) === 'object')
      expect(store.state.nowplaying.current === {})
    })
  })
  describe('@action', () => {
    it('should update lookupDirectory value successfully', () => {
      store.dispatch('setLookupDirectory', 'hello_world')
      expect(store.state.lookupDirectory === 'hello_world')
    })
  })
  describe('@getters', () => {
    it('should retrieve correct lookupDirectory value from state', () => {
      expect(store.getters.getLookupDirectory === store.state.lookupDirectory)
    })
    it('should retrive updated lookupDirectory value when current state is updated', () => {
      store.dispatch('setLookupDirectory', 'hello_world')
      expect(store.getters.getLookupDirectory === 'hello_world')
    })
    it('should retrieve correct songsMap from current state', () => {
      expect(store.getters.songsData === Object.values(store.state.songsMap))
    })
  })
})
