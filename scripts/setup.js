var path = require("path");
var findit = require("findit");
var { getters, mutations } = require("./scripts/state");
var constants = require("./scripts/constants");
var { readJSON, saveCache, extractAndStoreMetaTags } = require("./scripts/methods");

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
          mutations.addFile(file);
        }
      })

      finder.on('end', async () => {
        await extractAndStoreMetaTags();
        console.log(state.songsMap)
        saveCache();
      });
    });
})()