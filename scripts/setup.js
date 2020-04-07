var path = require("path");
var findit = require("findit");
var state = require("./scripts/state");
var constants = require("./scripts/constants");
var { readJSON, saveCache, getMetaData } = require("./scripts/methods");

// Fetch list of files from the computer
(async function () {
  readJSON(constants.CACHED_FILE_SRC)
    .then((jsonData) => {
      state.allFiles = jsonData;
      console.log(jsonData);
    })
    .catch((err) => {
      console.log(err);

      let finder = findit(state.lookupLocation);

      finder.on('file', (file) => {
        if (path.extname(file) == ".mp3") {
          state.allFiles.push(file);
        }
      })

      finder.on('end', () => {
        getMetaData();
        saveCache(state.allFiles);
      });
    });
})()