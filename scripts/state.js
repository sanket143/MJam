const state = Vue.observable({
  allFiles: [],
  songsMap: {},
  lookupLocation: "/home/sanket143/Music/Songs/SPOT"
})

const getters = {
  allFiles: () => state.allFiles,
  songsMap: () => state.songsMap,
  totalFiles: () => state.allFiles
}

const mutations = {
  addFile: (file) => {
    Vue.set(state, allFiles, state.allFiles.push(file))
  },
  setSongsMap: (jsonData) => state.songsMap[key] = value
}

module.exports = {
  getters,
  mutations,
  state
}