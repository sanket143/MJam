fs.readdir(dest, function(err, files){
    for(let i = 0; i < files.length; i++){
        file = files[i];
        if(path.extname(file) == ".mp3"){
            recent.songs_src.push(`${dest}/${file}`);
            jsmediatags.read(`${dest}/${file}`, {
                onSuccess: function(tag){
                    let ret = recent.reach;
                    tag.tags.picture.data = getAlbumArt(tag);
                    tag.tags.src = recent.songs_src[ret];
                    recent.songs.push(tag.tags);
                    recent.reach++;
                }
            });
        }
    }
});

let recent = new Vue({
    el: "#recent",
    data: {
        reach: 0,
        songs: [],
        songs_src: []
    },
    methods: {
        playMe: function(src){
            let song = new Howl({
                src: [src]
            });

            song.play();
        }
    }
})

// let song = new Howl({
//     src: [src]
// })
// song.play();