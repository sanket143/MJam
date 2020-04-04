export default {
  getDestination: (state) => {
    return state.destination
  },
  songsData: (state) => {
    return Object.values(state.songsMap)
  }
}
