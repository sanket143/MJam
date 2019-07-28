let nowplaying_frame = new Vue({
    el: "#nowplaying",
    data: {
        song: '',
        completion: 0
    },
    methods: {
        pause: function(){
            global_args.nowplaying.pause();
        },
        play: function(){
            global_args.nowplaying.play();
        }
    }
})