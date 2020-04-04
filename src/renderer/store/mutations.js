const { Howl } = require('howler')

export default {
  addSongs: function (state, songs) {
    state.songsMap = songs
  },
  playSong: function (state, fileSource) {
    let howl = new Howl({
      src: [fileSource]
    })

    state.nowplaying.current = state.songsMap[fileSource]
    state.nowplaying.howl = howl
    howl.play()
  }
}
