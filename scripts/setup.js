const fs = require("fs")
const path = require("path")
const findit = require("findit")

const state = require("./state")
const constants = require("./constants")
const { printError, readJSON } = require("./methods")

// Fetch list of files from the computer
(async () => {
  readJSON(constants.CACHED_FILE_SRC)
    .then((jsonData) => {

    })
    .catch((err) => {
      printError(err)

      let finder = findit(store.dest)

      finder.on('file', (file) => {
        if(path.extname(file) == ".mp3"){
          state.allFiles.push(file)
        }
      })

      finder.on('end', () => {
        saveCache(state.allSongs)
      })
    })
})().catch(err => {
  console.error(err)
})