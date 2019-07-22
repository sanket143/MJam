// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const electron = require("electron");
const jsmediatags = require("jsmediatags");
const path = require("path");
const fs = require("fs");
const HOME = process.env.HOME

fs.readdir(`${HOME}/Music`, function(err, files){
  files.map(function(file){
    if(path.extname(file) == ".mp3"){
      return jsmediatags.read(`${HOME}/Music/${file}`, {
        onSuccess: function(tag){
          song_list.song_tags.push(tag.tags);
          if(song_list.artists_index.indexOf(tag.tags.artist) != -1){
            var index = song_list.artists_index.indexOf(tag.tags.artist);
            song_list.artists[index]["songs"].push(tag.tags);
          } else {
            var index = song_list.artists_index.push(tag.tags.artist);
            song_list.artists.push({
              "artist": tag.tags.artist,
              "songs": [
                tag.tags
              ]
            });
          }
        }
      })
    }
  })
});

let song_list = new Vue({
  el: "#app",
  data: {
    song_tags: [],
    artists_index: [],
    artists: []
  }
})