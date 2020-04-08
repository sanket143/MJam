const title_frame = new Vue({
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

module.exports = title_frame