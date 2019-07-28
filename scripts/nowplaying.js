let nowplaying_frame = new Vue({
    el: "#nowplaying",
    data: {
        song: '',
        paused: false,
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
        }
    }
})