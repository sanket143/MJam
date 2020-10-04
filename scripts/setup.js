require('./scripts/components')
var path = require("path")
var findit = require("findit")
var state = require("./scripts/state")
var constants = require("./scripts/constants")
var { readJSON, saveCache, extractAndStoreMetaTags } = require("./scripts/methods");

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
      let firstSongSet = false

      let finder = findit(state.settings.lookupLocation)

      finder.on('file', (file) => {
        if (path.extname(file) == ".mp3") {
          state.allFiles.push(file)
          if(!firstSongSet) {
            state.load([state.allFiles[0]])
            firstSongSet = true
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
