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
      if(state.nowplaying.instance) // we have to check that nowplaying.instance is exist or not
      {
        state.nowplaying.instance.loop(state.settings.repeat) // If exist then change settings of repeatation
        saveSettings()     // save the settings
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
    toggleVolume(){
      var imag = document.getElementById("volume_icon");
      var tweaker = document.getElementById("volume");
      if(tweaker.value!=0)
      {
        imag.innerHTML = "volume_off";
        tweaker.value = "0";
      }
      else{
        imag.innerHTML = "volume_up";
        tweaker.value = "100";
      }
      state.settings.Volume = tweaker.value;
      state.settings.V_icon = imag.innerHTML;
      state.nowplaying.instance.volume(state.settings.Volume/100);
      saveSettings();
    },
    Volume_Tweaker(){
      var imag = document.getElementById("volume_icon");
      var tweaker = document.getElementById("volume");
      if(tweaker.value==0)
      {
        imag.innerHTML = "volume_off";
      }
      else
      {
        imag.innerHTML = "volume_up";
      }
      state.settings.Volume = tweaker.value;
      state.settings.V_icon = imag.innerHTML;
      state.nowplaying.instance.volume(state.settings.Volume/100);
      saveSettings();
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
