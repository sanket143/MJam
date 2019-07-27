// fs.readdir(`${HOME}/Music`, function(err, files){
//     files.map(function(file){
//         if(path.extname(file) == ".mp3"){
//             return jsmediatags.read(`${HOME}/Music/${file}`, {
//                 onSuccess: function(tag){
//                     tag.tags.picture.data = getAlbumArt(tag);
//                     song_list.song_tags.push(tag.tags);
//                     if(song_list.artists_index.indexOf(tag.tags.artist) != -1){
//                         var index = song_list.artists_index.indexOf(tag.tags.artist);
//                         song_list.artists[index]["songs"].push(tag.tags);
//                     } else {
//                         var index = song_list.artists_index.push(tag.tags.artist);
//                         song_list.artists.push({
//                             "artist": tag.tags.artist,
//                             "songs": [
//                                 tag.tags
//                             ]
//                         });
//                     }
//                 }
//             })
//         }
//     })
// });

// let artists = new Vue({
//   el: "#artists",
//   data: {
//     song_tags: [],
//     artists_index: [],
//     artists: []
//   }
// })