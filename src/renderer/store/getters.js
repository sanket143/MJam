export default {
  getDestination: (state) => {
    return state.destination
  },
  songsData: (state) => {
    return Object.values(state.songsMap)
  },
  getArtists: (state) => {
    return Object.values(state.songsMap).map((song) => {
      return song.artists
    })
  }
}
