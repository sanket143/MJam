let title_frame = new Vue({
    el: ".title-bar",
    data: {
        song: {
            title: "",
            artist: ""
        }
    },
    computed: {
        title: function () {
            if (this.song.title != "" && this.song.artist != "") {
                return this.song.title + " - " + this.song.artist;
            }
        }
    }
})

let right_frame = new Vue({
    el: "#right-frame",
    data: {
        artist_songs_sy: {},
        artists: []
    },
    computed: {
        artist_songs: function () {
            return this.artist_songs_sy;
        }
    },
    methods: {
        updateFrame: function (frame) {
            content_frame.frame = frame;
        },
        showArtist: function (artist) {
            content_frame.artist = {
                name: artist,
                songs: this.artist_songs[artist]
            }
        }
    }
})