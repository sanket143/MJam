fs.readdir(dest, function(err, files){
    for(let i = 0; i < files.length; i++){
        file = files[i];
        if(path.extname(file) == ".mp3"){
            jsmediatags.read(`${dest}/${file}`, {
                onSuccess: function(tag){
                    tag.tags.picture.data = getAlbumArt(tag);
                    if(recent.songs.length < 5 && tag.tags.artist == "Jonas Brothers"){
                        recent.songs.push(tag.tags);
                        console.log(tag.tags);
                    }
                }
            });
        }
    }
});

let recent = new Vue({
    el: "#recent",
    data: {
        songs: []
    }
})