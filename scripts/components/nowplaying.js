const state = require("../state")

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
      console.log(state.settings.repeat)
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
    }
  }
})

module.exports = nowplaying_frame
