var fs = require("fs");
var mm = require("music-metadata");

var { getters, mutations } = require('./state')
var constants = require("./constants")

const readJSON = (filePath) => {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(filePath)) {
      fs.readFile(filePath, (err, data) => {
        if (err) {
          reject(err)
        }

        jsonObj = JSON.parse(data.toString());
        resolve(jsonObj)
      })
    } else {
      reject(`No such file or directory: ${filePath}`)
    }
  })
}

const saveCache = () => {
  fs.mkdir(path.dirname(constants.CACHED_FILE_SRC), {
    recursive: true
  }, () => {
    fs.writeFile(
      constants.CACHED_FILE_SRC,
      JSON.stringify(state.songsMap),
      (err) => {
        if (err) {
          console.log(err)
        }
      })
  })
}

const extractAndStoreMetaTags = async () => {
  for (var i in state.allFiles) {
    let mp3File = state.allFiles[i]
    let metadata = await mm.parseFile(mp3File)
    let commonMetadata = metadata.common
    let tags = {
      src: mp3File,
      title: commonMetadata.title,
      album: commonMetadata.album,
      artists: commonMetadata.artists,
      genre: commonMetadata.genre
    }

    if (commonMetadata.picture.length) {
      tags.picture = `data:${commonMetadata.picture[0].format};base64,${commonMetadata.picture[0].data.toString('base64')}`
    } else {
      tags.picture = 'assets/mjam-default.png'
    }
    state.songsMap[tags.src] = tags
  }
}

module.exports = {
  readJSON,
  saveCache,
  extractAndStoreMetaTags
}