const state = require("../state")
const { reScanDirectory } = require("../methods")

const content_frame = new Vue({
  el: "#content",
  data: {
    search_query: "",
    lookupDir: "",
    currentTheme: localStorage.getItem('theme-color')
  },
  computed: {
    init(){
      this.lookupDir = state.settings.lookupLocation
      return state.settings.lookupLocation
    },
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
      let query = this.search_query.replace(/\s+/gi, '.*?')
      query = query.replace("(", "\\(").replace(")", "\\)")
      console.log(query)
      const pattern = new RegExp(query, "gi")
      const results = this.processedSongsList.filter((song) => song.search.match(pattern))
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
      console.log("Updated")
      return Object.values(state.songsMap)
    },
    recent_songs(){
      return state.recentSongs
    },
    loved_songs(){
      return state.playlists.loved.map(src => state.songsMap[src]).filter(Boolean)
    }
  },
  methods: {
    reScan(){
      console.log(this.lookupDir)
      state.settings.lookupLocation = this.lookupDir
      reScanDirectory()
    },
    switchTheme(){
      const storedTheme = localStorage.getItem('theme-color')
      if(storedTheme ==='theme-dark'){
        localStorage.setItem('theme-color', 'theme-light')
        this.currentTheme =localStorage.getItem('theme-color')
      }
      else{
        localStorage.setItem('theme-color', 'theme-dark')
        this.currentTheme =localStorage.getItem('theme-color')
      }
    },
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
  },
  mounted(){
    this.lookupDir = state.settings.lookupLocation
  },
})

window.global = {
  content_frame
}

module.exports = content_frame
