const state = require("../state")

const right_frame = new Vue({
  el: "#right-frame",
  data: {
    artist_songs_sy: {}
  },
  computed: {
    artists(){
      return Object.keys(state.artistsMap).sort()
    }
  },
  methods: {
    updateFrame: function (frame) {
      state.contentFrame = frame
    },
    showArtistSongs: function (artists) {
      state.frameData.artist.names = artists
    }
  }
})

module.exports = right_frame