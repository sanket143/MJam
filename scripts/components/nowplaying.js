const state = require("../state")

const nowplaying_frame = new Vue({
  el: "#nowplaying",
  data: {
    repeat: false
  },
  computed: {
    paused(){
      return state.nowplaying.src === ""
    },
    completion(){
      return state.nowplaying.completion
    },
    song(){
      return state.nowplaying.song
    }
  },
  methods: {
    pause: function () {
      state.pause()
    },
    play: function () {
      state.play()
    }
  }
})

module.exports = nowplaying_frame