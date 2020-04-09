const state = require("../state")

const right_frame = new Vue({
  el: "#right-frame",
  data: {
    artist_songs_sy: {}
  },
  computed: {
    artists(){
      return Object.keys(state.artistsMap)
    }
  },
  methods: {
    updateFrame: function (frame) {
      state.contentFrame = frame;
    },
    showArtist: function (artist) {
      state.frameData.artist.name = artist
    }
  }
})

module.exports = right_frame