global_args.getFiles.then((files) => {
  for (i = 0; i < files.length; i++) {
    global_args.getTags(files[i]).then((tags) => {
      content_frame.all_songs.push(tags);
    })
  }
});

global_args.getRecent.then((songs) => {
  for (i = 0; i < songs.length; i++) {
    content_frame.recent_songs.push(songs[i]);
  }

})

let content_frame = new Vue({
  el: ".main-frame",
  data: {
    frame: 'home',
    all_songs: [],
    recent_songs: [],
    artist: [],
    current: ""
  },
  methods: {
    playMe: function (src) {
      if (global_args.nowplaying_src != src) {
        global_args.load(src);
        global_args.nowplaying.play();
      } else {
        global_args.nowplaying.play();
      }

      this.current = src;
    },
    pauseMe: function () {
      global_args.nowplaying.pause();
      this.current = "";
    },
    updateFrame: function (frame) {
      this.frame = frame;
    },
    showArtists: function (artists) {
      artists_list = artists.split(",");
      songs = [];
      console.log(artists_list);
      this.artist = {
        name: artists,
        songs: right_frame.artist_songs[artists_list[0].trim()]
      }

      song_list = [];
      for (let i = 0; i < this.artist.songs.length; i++) {
        song_list.push(this.artist.songs[i].src);
      }

      for (let i = 1; i < artists_list.length; i++) {
        songs = right_frame.artist_songs[artists_list[i].trim()];
        for (let j = 0; j < songs.length; j++) {
          if (song_list.indexOf(songs[j].src) == -1) {
            this.artist.songs.push(songs[j]);
            song_list.push(songs[j].src);
          }
        }
      }
    }
  }
})

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