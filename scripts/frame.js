global_args.getFiles.then((files) => {
    for(i = 0; i < files.length; i++){
        global_args.getTags(files[i]).then((tags) => {
            content_frame.all_songs.push(tags);
        })
    }
});

let content_frame = new Vue({
    el: ".main-frame",
    data: {
        frame: 'home',
        all_songs: []
    },
    computed: {
        recent_songs: function(){
            return this.all_songs.slice(0, 6);
        }
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
        },
        updateFrame: function(frame){
            this.frame = frame;
        }
    }
})