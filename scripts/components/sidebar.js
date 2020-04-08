const state = require("../state")

console.log(state.contentFrame)
let sidebar_frame = new Vue({
  el: "#sidebar",
  data: {
  },
  computed: {
    frame: function () {
      return state.contentFrame // return content_frame.frame;
    }
  },
  methods: {
    updateFrame: function (frame) {
      state.contentFrame = frame
    },
  }
})

module.exports = sidebar_frame