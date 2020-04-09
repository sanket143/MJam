const state = require("../state")

const nowplaying_frame = new Vue({
  el: "#nowplaying",
  data: {
    paused: false,
    repeat: false,
    completion: 0
  },
  computed: {
    song(){
      return state.nowplaying.song
    }
  },
  methods: {
    pause: function () {
      global_args.nowplaying.pause();
      this.paused = true;
    },
    play: function () {
      global_args.nowplaying.play();
      this.paused = false;
    },
    toggleRepeat: function () {
      this.repeat = !this.repeat;
      global_args.nowplaying.loop(this.repeat);
    }
  }
})

module.exports = nowplaying_frame