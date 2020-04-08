require('./scripts/components')
var path = require("path");
var findit = require("findit");
var state = require("./scripts/state");
var constants = require("./scripts/constants");
var { readJSON, saveCache, extractAndStoreMetaTags } = require("./scripts/methods");

// Fetch list of files from the computer
(async function () {
  readJSON(constants.CACHED_FILE_SRC)
    .then((jsonData) => {
      state.allFiles = Object.keys(jsonData)
      state.songsMap = jsonData;
    })
    .catch((err) => {
      console.log(err);

      let finder = findit(state.lookupLocation);

      finder.on('file', (file) => {
        if (path.extname(file) == ".mp3") {
          state.allFiles.push(file);
        }
      })

      finder.on('end', async () => {
        await extractAndStoreMetaTags();
        saveCache();
      });
    });
})()