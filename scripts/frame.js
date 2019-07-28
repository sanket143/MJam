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
            global_args.play(src);
        },
        updateFrame: function(frame){
            this.frame = frame;
        }
    }
})