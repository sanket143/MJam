fs.readdir(`${HOME}/Music`, function(err, files){
    for(let i = 0; i < files.length; i++){
        file = files[i];
        if(path.extname(file) == ".mp3"){
            jsmediatags.read(`${HOME}/Music/${file}`, {
                onSuccess: function(tag){
                    tag.tags.picture.data = getAlbumArt(tag);
                    if(jams.songs.length < 5){
                        jams.songs.push(tag.tags);
                        console.log(tag.tags);
                    }
                }
            });
        }
    }
});

let jams = new Vue({
    el: "#jams",
    data: {
        songs: []
    }
})