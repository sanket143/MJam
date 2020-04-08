const jsmediatags = require("jsmediatags");

const store = new Vuex.Store({
  state: {
    dest: `${HOME}/Music/Songs/SPOT`,
    nowplaying_src: false,
    artists: [],
    computed_tags: {}
  },
  mutations: {
    addSong(state, payload) {
      state.computed_tags[payload.src] = payload
    },
  },
  actions: {
    addSong({ commit }, file_path) {
      jsmediatags.read(file_path, {
        onSuccess: function (tag) {
          let picture = tag.tags.picture;
          let imageURI = "assets/mjam-default.png";

          if (picture) {
            let base64String = "";
            for (var i = 0; i < picture.data.length; i++) {
              base64String += String.fromCharCode(picture.data[i]);
            }
            imageURI = "data:" + picture.format + ";base64," + window.btoa(base64String);
          }

          tag.tags.picture = {
            data: imageURI
          }

          if (!tag.tags.title) {
            tag.tags.title = path.basename(file_path);
          }

          if (!tag.tags.artist) {
            tag.tags.artist = "Unknown";
          }

          tag.tags.src = file_path;
          commit("addSong", tag.tags)
        }
      });
    }
  }
})

module.exports = store