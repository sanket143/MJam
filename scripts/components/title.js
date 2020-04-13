const state = require("../state")

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
  }
})

module.exports = title_frame