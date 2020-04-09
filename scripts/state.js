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
      song: {},
      instance: false
    }
  },
  methods: {
    play(sources){
      if(this.nowplaying.song.src != sources[0]){
        if(this.nowplaying.instance){
          this.nowplaying.instance.stop()
        }

        this.nowplaying.instance = new Howl({
          src: sources
        })
      }

      this.nowplaying.id = this.nowplaying.instance.play()
      this.nowplaying.src = sources[0]
      this.nowplaying.song = this.songsMap[this.nowplaying.src]
    },
    pause(){
      this.nowplaying.instance.pause()
      this.nowplaying.src = ""
    }
  }
})

module.exports = state