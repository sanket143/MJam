const state = require("../state")
const { remote } = require("electron")

const title_frame = new Vue({
  el: ".title-bar",
  computed: {
    title: function () {
      let title = "MJam - A Modern Music Player"
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
    }
  }
})

module.exports = title_frame
