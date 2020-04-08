const state = Vue.observable({
  allFiles: [],
  songsMap: {},
  lookupLocation: "/home/sanket143/Music/Songs/SPOT"
})

const getters = {
  allFiles: () => state.allFiles,
  songsMap: () => state.songsMap
}

const mutations = {
  addFile: (file) => state.allFiles.push(file),
  addSong: (key, value) => state.songsMap[key] = value
}

module.exports = {
  getters,
  mutations
}