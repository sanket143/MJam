const fs = require("fs")

const printError = (errorMessage) => {
  console.error(errorMessage)
}

const readJSON = (filePath) => {
  return new Promise((resolve, reject) => {
    if(fs.existsSync(constants.CACHED_FILE_SRC)){
      fs.readFile(constants.CACHED_FILE_SRC)
        .then((data) => {
          resolve(JSON.parse(data.toString()));
        })
        .catch((err) => {
          reject(err)
        })
    } else {
      reject(`No such file or directory: ${filePath}`)
    }
  })
}

const saveCache = () => {

}

export default {
  printError,
  readJSON
}