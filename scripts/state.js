const state = new Vue({
  data: {
    allFiles: [],
    songsMap: {},
    recentSongs: [],
    lookupLocation: "/home/sanket143/Music/Songs/SPOT",
    contentFrame: "home",
    nowplaying: {
      id: 0,
      src: "",
      song: {}
    }
  },
  methods: {
    play(sources){
      const howl = new Howl({
        src: sources
      })

      this.nowplaying.id = howl.play()
      this.nowplaying.src = sources[0]
    }
  }
})

module.exports = state