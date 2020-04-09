const state = new Vue({
  data: {
    allFiles: [],
    songsMap: {},
    recentSongs: [],
    lookupLocation: "/home/sanket143/Music/Songs/SPOT",
    contentFrame: "home",
    FrameData: {
      artist: ""
    },
    nowplaying: {
      id: 0,
      src: "",
      song: {},
      completion: 0,
      instance: false,
      tracker: false
    }
  },
  computed: {
    artistsMap(){
      let obj = {}
      for(src in this.songsMap){
        this.songsMap[src].artists.forEach(artist => {
          if(obj[artist]){
            obj[artist].push(songsMap[src])
          } else {
            obj[artist] = [songsMap[src]]
          }
        })
      }
    }
  },
  methods: {
    play(sources){
      if(this.nowplaying.song.src !== sources[0]){
        this.nowplaying.completion = 0

        if(this.nowplaying.instance){
          this.nowplaying.instance.stop()
        }

        this.nowplaying.instance = new Howl({
          src: sources
        })
        
        this.nowplaying.instance.on("pause", () => {
          this.nowplaying.src = ""
          clearInterval(this.nowplaying.tracker);
        })

        this.nowplaying.instance.on("end", () => {
          this.nowplaying.src = ""
          clearInterval(this.nowplaying.tracker);
        })
      }

      this.nowplaying.tracker = setInterval(() => {
        this.nowplaying.completion = 
        this.nowplaying.instance.seek() * 1000 / (this.nowplaying.instance.duration() * 10);
      }, 100)

      this.nowplaying.id = this.nowplaying.instance.play()
      this.nowplaying.src = sources[0]
      this.nowplaying.song = this.songsMap[this.nowplaying.src]
    },
    pause(){
      this.nowplaying.instance.pause()
    }
  }
})

module.exports = state