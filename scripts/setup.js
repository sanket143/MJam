require('./scripts/components')
var path = require("path")
var findit = require("findit")
var state = require("./scripts/state")
var constants = require("./scripts/constants")
var { readJSON, saveCache, extractAndStoreMetaTags } = require("./scripts/methods");

// Fetch list of files from the computer
(async function () {
  readJSON(constants.CACHED_FILE_SRC)
    .then((jsonData) => {
      state.allFiles = Object.keys(jsonData)
      state.songsMap = jsonData;
      state.nowplaying.song = jsonData[state.allFiles[0]]
      console.log(state.nowplaying.song)
    })
    .catch((err) => {
      console.log(err)

      let finder = findit(state.lookupLocation);

      finder.on('file', (file) => {
        if (path.extname(file) == ".mp3") {
          state.allFiles.push(file)
        }
      })

      finder.on('end', async () => {
        await extractAndStoreMetaTags();
        saveCache()
      })
    })
})();

// Fetch recent songs
(async function () {
  readJSON(constants.RECENT_SONGS_FILE_SRC)
    .then((jsonData) => {
      console.log(jsonData)
      state.recentSongs = jsonData
      state.nowplaying.song = jsonData[0]
    })
    .catch((err) => {
      console.log(err)
    })
})()