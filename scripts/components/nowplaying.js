const state = require("../state")
const { saveCache, saveSettings } = require("../methods")

const nowplaying_frame = new Vue({
  el: "#nowplaying",
  computed: {
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
      state.nowplaying.instance.loop(state.settings.repeat)
      saveSettings()
      return state.settings.repeat
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
      state.nowplaying.song.loved = !state.nowplaying.song.loved
      state.songsMap[this.song.src].loved = this.song.loved
      saveCache()
    }
  }
})

module.exports = nowplaying_frame
