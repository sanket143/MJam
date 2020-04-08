const path = require("path")

module.exports = {
  CACHED_FILE_SRC: path.resolve(__dirname, "../.user/cache.data.json"),
  RECENT_SONGS_FILE_SRC: path.resolve(__dirname, "../.user/recent.data.json")
}