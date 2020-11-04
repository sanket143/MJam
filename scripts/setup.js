require('./scripts/components')
var path = require("path")
var findit = require("findit")
var state = require("./scripts/state")
var constants = require("./scripts/constants")
var { readJSON, saveCache, extractAndStoreMetaTags } = require("./scripts/methods");
var count=0;

// Spacebar to pause/play song
document.addEventListener("keypress",function(){
  if(event.keyCode==32)
    document.getElementById("toggle").click();
});

// Mute Volume or Full Volume by clicking on volume icon
function change_volume(){
  count++;
  var imag = document.getElementById("volume_icon");
  var tweaker = document.getElementById("volume");
  if(count%2==1)
  {
    imag.src = "./assets/volume-buttons/volume_muted.png";
    tweaker.value = "0";
    state.toggle_volume(tweaker.value); // mute volume
  }
  else{
    imag.src = "./assets/volume-buttons/volume_full.png";
    tweaker.value = "100";
    state.toggle_volume(tweaker.value) // full volume
  }
}

// Change volume using Volume Tweaker
function change_tweaker()
{
  var imag = document.getElementById("volume_icon");
  var v = document.getElementById("volume");
  if(v.value==0)
    imag.src = "./assets/volume-buttons/volume_muted.png";
  else
    imag.src = "./assets/volume-buttons/volume_full.png";
  state.toggle_volume(v.value); // toggle the volume
}

(async function () {
  // Get users settings configuration
  await readJSON(constants.SETTINGS_FILE_SRC)
    .then((jsonData) => {
      state.settings.lookupLocation = jsonData["lookupLocation"]
      state.settings.repeat = jsonData["repeat"] ? jsonData["repeat"] : false
    }).catch((err) => {
      console.log(err)
      state.settings.lookupLocation = path.resolve(process.env["HOME"], "Music")
    })

  // Get all songs
  await readJSON(constants.CACHED_FILE_SRC)
    .then((jsonData) => {
      state.allFiles = Object.keys(jsonData)
      state.songsMap = jsonData
    })
    .catch((err) => {
      console.log(err)

      let finder = findit(state.settings.lookupLocation)

      finder.on('file', (file) => {
        if (path.extname(file) == ".mp3") {
          state.allFiles.push(file)
        }
      })

      finder.on('end', async () => {
        await extractAndStoreMetaTags()
        saveCache()
      })
    })

  // Get Recently Played songs
  await readJSON(constants.RECENT_SONGS_FILE_SRC)
    .then((jsonData) => {
      state.recentSongSources = jsonData
      state.load([jsonData[0]])
    })
    .catch((err) => {
      console.log(err)
    })

  // Get playlists
  await readJSON(constants.PLAYLISTS_FILE_SRC)
    .then((jsonData) => {
      state.playlists.loved = jsonData.loved ? jsonData.loved : []
    })
    .catch((err) => {
      console.log(err)
    })
})()
