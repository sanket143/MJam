const state = require("../state")

const content_frame = new Vue({
  el: "#content",
  data: {
    search_query: "",
  },
  computed: {
    processedSongsList(){
      return this.all_songs.map((song) => {
        song.search = `${song.title} - ${song.artists.join(", ")}`
        return song
      })
    },
    showSearch(){
      return this.search_query != ""
    },
    searchResult(){
      const query = this.search_query.replace(/\s+/gi, '.*?')
      const pattern = new RegExp(query, "gi")
      const results = this.processedSongsList.filter((song) => song.search.match(pattern))
      console.log(results)
      return results
    },
    artistNames(){
      return state.frameData.artist.names
    },
    artistSongs(){
      return state.songsOfArtist
    },
    current(){
      return state.nowplaying.src
    },
    frame(){
      return state.contentFrame
    },
    all_songs(){
      return Object.values(state.songsMap)
    },
    recent_songs(){
      return state.recentSongs
    }
  },
  methods: {
    playMe: function (src) {
      state.play([src])
    },
    pauseMe: function () {
      state.pause()
    },
    updateFrame: function (frame) {
      state.contentFrame = frame
    },
    showArtistSongs: function (artists) {
      console.log(artists)
      state.frameData.artist.names = artists
    }
  }
})

window.global = {
  content_frame
}

module.exports = content_frame