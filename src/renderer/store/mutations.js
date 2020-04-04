const { Howl } = require('howler')

export default {
  addSongs: function (state, songs) {
    state.songsMap = songs
  },
  playSong: function (state, fileSource) {
    state.nowplaying.current = state.songsMap[fileSource]
    let howl = new Howl({
      src: ['file://' + fileSource]
    })

    howl.play()
  }
}
