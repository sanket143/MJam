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
      content_frame.updateFrame(frame);
    },
  }
})

module.exports = sidebar_frame