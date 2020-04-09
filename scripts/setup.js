require('./scripts/components')
var path = require("path")
var findit = require("findit")
var state = require("./scripts/state")
var constants = require("./scripts/constants")
var { readJSON, saveCache, extractAndStoreMetaTags } = require("./scripts/methods");

// Fetch list of files from the computer
(async function () {
  await readJSON(constants.CACHED_FILE_SRC)
    .then((jsonData) => {
      state.allFiles = Object.keys(jsonData)
      state.songsMap = jsonData;
      state.nowplaying.song = jsonData[state.allFiles[0]]
      state.nowplaying.instance = new Howl({
        src: [state.allFiles[0]]
      })

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
  await readJSON(constants.RECENT_SONGS_FILE_SRC)
    .then((jsonData) => {
      console.log(jsonData)
      state.recentSongSources = jsonData
      state.nowplaying.song = state.songsMap[jsonData[0]]
      console.log(state.nowplaying.song)
    })
    .catch((err) => {
      console.log(err)
    })
})();