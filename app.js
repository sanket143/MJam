(
  function() {
    "use strict"
    let express = require('express')
    let app = express()
    app.get('/:name', function(req, res) {
      let file = req.params.name
      if(file.includes('.mp3'))
        res.sendFile(path.join(state.settings.lookupLocation, file))
      else
        res.send("We don't serve non-mp3 files")
    })
    let server = app.listen(3000, function () {
      console.log('Express server listening on port ' + server.address().port)
    })
    module.exports = app
  }()
)
