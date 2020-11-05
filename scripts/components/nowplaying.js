const state = require("../state")
const { savePlaylists, saveSettings } = require("../methods")

const nowplaying_frame = new Vue({
  el: "#nowplaying",
  computed: {
    loved(){
      return state.playlists.loved.indexOf(this.song.src) != -1
    },
    repeat(){
      return state.settings.repeat
    },
    paused(){
      return state.nowplaying.src === ""
    },
    completion(){
      return state.nowplaying.completion
    },
    song(){
      return state.nowplaying.song
    },
    onRepeatChange(){
      if(state.nowplaying.instance) {
        state.nowplaying.instance.loop(state.settings.repeat)
        saveSettings()
        return state.settings.repeat
      }
    }
  },
  methods: {
    pause() {
      state.pause()
    },
    play() {
      state.play()
    },
    toggleRepeat(){
      state.settings.repeat = !state.settings.repeat
    },
    toggleLoved(){
      let song_src = this.song.src
      let index = state.playlists.loved.indexOf(song_src)

      if(index == -1){
        state.playlists.loved.push(song_src)
      } else {
        state.playlists.loved.splice(index, 1)
      }

      savePlaylists()
    }
  }
})

module.exports = nowplaying_frame
