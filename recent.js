global_args.getFiles.then((files) => {
    for(i = 0; i < files.length; i++){
        global_args.getTags(files[i]).then((tags) => {
            recent.songs.push(tags);
        })
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
            if(global_args.current){
                global_args.current.stop();
            }

            global_args.current = new Howl({
                src: [src]
            });

            global_args.current.play();
        }
    }
})