const { saveRecentSongs, saveSettings } = require('./methods')

const state = new Vue({
  data: {
    allFiles: [],
    songsMap: {},
    isScanning: false,
    recentSongSources: [],
    contentFrame: "home",
    settings: {
      lookupLocation: "",
      repeat: false,
      Volume: 100,
      V_icon: "volume_up"
    },
    frameData: {
      artist: {
        names: []
      }
    },
    nowplaying: {
      ids: [],
      src: "",
      song: {},
      completion: 0,
      instance: false,
      tracker: false
    },
    playlists: {
      loved: []
    }
  },
  computed: {
    recentSongs(){
      return this.recentSongSources.map((source) => this.songsMap[source]).filter(Boolean)
    },
    artistsMap(){
      let obj = {}
      for(src in this.songsMap){
        this.songsMap[src].artists.forEach(artist => {
          if(obj[artist]){
            obj[artist].push(this.songsMap[src])
          } else {
            obj[artist] = [this.songsMap[src]]
          }
        })
      }

      return obj
    },
    songsOfArtist(){
      let arr = []
      this.frameData.artist.names.forEach(artist => {
        arr = arr.concat(this.artistsMap[artist])
      })

      return arr
    }
  },
  methods: {
    stop(){
      for(i in this.nowplaying.ids){
        this.nowplaying.instance.stop(this.nowplaying.ids[i])
      }
    },
    load(sources){
      this.nowplaying.instance = new Howl({
        src: sources,
        loop: this.repeat,
        volume: state.settings.Volume/100
      })

      // When song starts playing
      this.nowplaying.instance.on("play", () => {
        this.nowplaying.tracker = setInterval(() => {
          this.nowplaying.completion =
          this.nowplaying.instance.seek() * 1000 / (this.nowplaying.instance.duration() * 10)
        }, 100)
      })

      // When song is paused
      this.nowplaying.instance.on("pause", () => {
        this.nowplaying.src = ""
        clearInterval(this.nowplaying.tracker)
      })

      // When the song ends
      this.nowplaying.instance.on("end", () => {
        this.nowplaying.src = ""
        this.nowplaying.completion = 0
        clearInterval(this.nowplaying.tracker)
      })

      this.nowplaying.song = this.songsMap[sources[0]]
    },
    play(sources){
      if(sources && this.nowplaying.song.src !== sources[0]){

        if(this.nowplaying.ids.length){
          this.stop()
        }

        this.load(sources)
        this.nowplaying.ids.push(this.nowplaying.instance.play())

        let srcIndex = this.recentSongSources.indexOf(sources[0])
        this.nowplaying.completion = 0

        // Update Recently Played Songs list
        if(srcIndex == -1){
          this.recentSongSources.unshift(sources[0])
          if(this.recentSongSources.length > 10){
            this.recentSongSources.pop()
          }
        } else {
          this.recentSongSources.splice(srcIndex, 1)
          this.recentSongSources.unshift(sources[0])
        }

        // Save Recently Played Songs
        saveRecentSongs()
      } else {
        this.nowplaying.ids.push(this.nowplaying.instance.play())
      }

      this.nowplaying.src = this.nowplaying.song.src
    },
    pause(){
      for(i in this.nowplaying.ids){
        this.nowplaying.instance.pause(this.nowplaying.ids[i])
      }
    }
  }
})

module.exports = state
