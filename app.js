const { readJSON } = require("./scripts/methods")
const constants = require("./scripts/constants")
const path = require("path")
const express = require('express')
const app = express()

app.get('/song', async (req, res) => {
  const { path } = req.query

  await readJSON(constants.CACHED_FILE_SRC)
    .then((jsonData) => {
      if(jsonData[path]){
        res.sendFile(path)
      } else {
        res.send("We don't serve non-mp3 files")
      }   
    })  
    .catch((err) => {
      console.log(err)
    })  
})

let server = app.listen(3000, function () {
  console.log('Express server listening on port ' + server.address().port)
})
