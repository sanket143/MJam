require('./scripts/components')
var path = require("path")
var findit = require("findit")
var state = require("./scripts/state")
var constants = require("./scripts/constants")
var { readJSON, saveCache, extractAndStoreMetaTags } = require("./scripts/methods");
var i=0

function compare(a, b)
{
  return a.toLowerCase() < b.toLowerCase()  // compare two files title with case-insensative
}

function insertSorted(array, element)
{
  for(i=0;i<array.length && compare(array[i], element);i++) {} // find right index for inserting new file into allFiles
  array.splice(i, 0, element)  // insert file at i'th index such that allFiles array is sorted 
}

// Spacebar to pause/play song
document.addEventListener("keypress",function(){
  if(event.keyCode==32)
    document.getElementById("toggle").click();
});

(async function () {
  // Get users settings configuration
  await readJSON(constants.SETTINGS_FILE_SRC)
    .then((jsonData) => {
      state.settings.lookupLocation = jsonData["lookupLocation"]
      state.settings.repeat = jsonData["repeat"] ? jsonData["repeat"] : false
      state.settings.Volume = jsonData["Volume"] ? jsonData["Volume"] : 100
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
          if(!state.nowplaying.instance){
            state.allFiles.push(file)
            state.load(state.allFiles[0])
          }
          else{
            insertSorted(state.allFiles, file)
          }
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
