const state = require("../state")
const { remote } = require("electron")

const title_frame = new Vue({
  el: ".title-bar",
  data() {
    return{
      currentTheme: localStorage.getItem('theme-color')
    }
  },
  computed: {
    title: function () {
      let title = "MJam - An MP3 Player"
      if (state.nowplaying.song && state.nowplaying.song.title) {
        title = state.nowplaying.song.title

        if(state.nowplaying.song.artists.length){
          title += " - " + state.nowplaying.song.artists.join(", ")
        }
      }

      return title
    }
  },
  methods: {
    close(){
      const _window = remote.BrowserWindow.getFocusedWindow()
      _window.close()
    },
    minimize(){
      const _window = remote.BrowserWindow.getFocusedWindow()
      _window.minimize()
    },
    maximize(){
      const _window = remote.BrowserWindow.getFocusedWindow()
      _window.isMaximized() ? _window.unmaximize() : _window.maximize()
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
    }
  }
})

module.exports = title_frame
