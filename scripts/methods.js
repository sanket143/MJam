var fs = require("fs");
var jsmediatags = require("jsmediatags");

var state = require('./state')
var constants = require("./constants")

const readJSON = (filePath) => {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(filePath)) {
      fs.readFile(filePath, (err, data) => {
        if (err) {
          reject(err)
        }

        resolve(data)
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
      state.allSongs,
      (err) => {
        if (err) {
          console.log(err)
        }
      })
  })
}
const getAlbumArt = function(tags){
    const picture = tags.picture;
    let imageURI = "assets/mjam-logo.png";
    if(picture){
        let base64String = "";
        for(var i = 0; i < picture.data.length; i++){
            base64String += String.fromCharCode(picture.data[i]);
        }
        imageURI = "data:" + picture.format + ";base64," + window.btoa(base64String);
    }

    return imageURI;
}

const getMetaData = (file_path) => {
  return new Promise((resolve, reject) => {
    jsmediatags.read(file_path, {
      onSuccess: (tag) => {
        let tags = tag.tags;
        if (!tags.title) {
          tags.title = path.basename(file_path);
        }
        
        tags.picture = getAlbumArt(tags)
      }
    })
  })
}

module.exports = {
  readJSON,
  saveCache
}