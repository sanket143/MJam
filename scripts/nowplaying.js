let nowplaying_frame = new Vue({
    el: "#nowplaying",
    data: {
        song: '',
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

let volume = document.getElementById("volume");

volume.onload = function(){
    volume.oninput = function(){
        global_args.nowplaying.volume(this.value / 100);
    }
}