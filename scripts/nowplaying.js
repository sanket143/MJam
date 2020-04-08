var state = require("./scripts/state.js")

global_args.getRecent.then((songs) => {
    if(songs.length){
        nowplaying_frame.song = songs[0];
        global_args.load(songs[0].src);
        nowplaying_frame.paused = !global_args.nowplaying.playing();

    }
})

let nowplaying_frame = new Vue({
    el: "#nowplaying",
    data: {
        song: "",
        paused: false,
        repeat: false,
        completion: 0
    },
    methods: {
        pause: function(){
            global_args.nowplaying.pause();
            this.paused = true;
        },
        play: function(){
            global_args.nowplaying.play();
            this.paused = false;
        },
        toggleRepeat: function(){
            this.repeat = !this.repeat;
            global_args.nowplaying.loop(this.repeat);
        }
    }
})