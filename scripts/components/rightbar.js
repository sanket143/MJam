const right_frame = new Vue({
  el: "#right-frame",
  data: {
    artist_songs_sy: {},
    artists: []
  },
  computed: {
    artist_songs: function () {
      return this.artist_songs_sy;
    }
  },
  methods: {
    updateFrame: function (frame) {
      content_frame.frame = frame;
    },
    showArtist: function (artist) {
      content_frame.artist = {
        name: artist,
        songs: this.artist_songs[artist]
      }
    }
  }
})

module.exports = right_frame