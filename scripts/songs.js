global_args.getFiles.then((files) => {
    for(i = 0; i < files.length; i++){
        global_args.getTags(files[i]).then((tags) => {
            songs_section.songs.push(tags);
        })
    }
});

let songs_section = new Vue({
    el: "#songs-section",
    data: {
        songs: [],
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