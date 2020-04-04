<template>
  <div id="app">
    <TitleBar />
    <div class="title-spacer" style="height: 29px;"></div>
    <div id="body">
      <div id="top-frame">
        <SideBar />
        <div id="content-wrapper">
          <div id="content">
            <div class="search-bar">
              <i class="material-icons">search</i>
              <input placeholder="Search songs, artists and albums..." type="text" id="search" />
            </div>
            <div class="main-frame">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import TitleBar from '@/components/titlebar'
import SideBar from '@/components/sidebar'

export default {
  name: 'mjam',
  components: {
    TitleBar,
    SideBar
  },
  methods: {
    ...mapActions([
      'fetchSongs'
    ])
  },
  mounted () {
    this.fetchSongs('/home/sanket143/Music/Songs/SPOT')
  }
}
</script>

<style>
/* CSS */
html,
body {
  padding: 0;
  margin: 0;
  color: #353535;
  height: -webkit-fill-available;
  font-family: "Source Sans Pro", sans-serif;
}

body {
  display: grid;
  height: 100vh;
  grid-template-rows: 30px auto 80px;
}

button {
  outline: none;
}

#top-frame {
  display: grid;
  height: 100%;
  grid-template-columns: 215px auto 300px;
}

/* latin */
@font-face {
  font-family: "Salsa";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local("Salsa-Regular"), url(./assets/fonts/Salsa.woff2) format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

@font-face {
  font-family: "Material Icons";
  font-style: normal;
  font-weight: 400;
  src: url(~@/assets/fonts/Material-Icons.woff2) format("woff2");
}

::-webkit-scrollbar {
  display: none;
}

/* latin-ext */
@font-face {
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local("Source Sans Pro Regular"), local("SourceSansPro-Regular"),
    url(~@/assets/fonts/Source-Sans-Pro.woff2) format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local("Source Sans Pro Regular"), local("SourceSansPro-Regular"),
    url(~@/assets/fonts/Source-Sans-Pro-Latin.woff2) format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

.material-icons {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  vertical-align: middle;
  -moz-font-feature-settings: "liga";
  -moz-osx-font-smoothing: grayscale;
}

#content {
  padding-left: 40px;
}

/* Search Bar */
#content .search-bar {
  margin-top: 10px;
  padding: 10px;
  color: grey;
  display: flex;
}

#content .search-bar input {
  margin-left: 10px;
  outline: none;
  border: none;
  width: 100%;
}

/* Main Frame */
#content .main-frame #recent-home-section {
  height: calc(100vh - 80px - 148px);
}

#content .main-frame .songs-list {
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  overflow-y: scroll;
  height: calc(100vh - 80px - 148px);
}

#content .main-frame .songs-list .song {
  width: 180px;
  margin-right: 10px;
  margin-bottom: 10px;
}

#content .songs-list .song-art {
  width: 180px;
  height: 180px;
  overflow: hidden;
  border-radius: 5px;
  background-size: contain;
}

#content .songs-list .song-art .play-toggle {
  width: 100%;
  height: 100%;
  color: white;
  opacity: 0;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #48000087;
}

#content .songs-list .song-art .play-toggle:hover {
  opacity: 1;
}

#content .songs-list .song-art .play-toggle.pause-me {
  opacity: 1;
}

#content .songs-list .song-art .play-toggle i {
  font-size: 100px;
}

#content .songs-list .song .song-desc {
  padding: 10px 0 0 10px;
}

#content .songs-list .song-title {
  font-size: 13px;
}

#content .songs-list .song-artist {
  font-size: 12px;
  cursor: pointer;
  color: #e45252;
}
#content .songs-list .song-artist:hover {
  text-decoration: underline;
}

#content .songs-list .song-title, #content .songs-list .song-artist {
  margin: 0;
  padding: 0;
}


#content .jam-list .jam {
  display: flex;
  transition: 0.2s;
  cursor: pointer;
  width: 271px;
  height: 36px;
  border-radius: 40px;
  background-color: #f6f6f6;
  margin-bottom: 10px;
  padding: 5px;
}

#content .jam-list .jam:hover {
  box-shadow: 2px 3px 6px 0px #d0c0c3ab;
  transform: translateY(-2px) translateX(-2px);
}

#content .jam .jam-art {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 10px;
  background-size: cover;
  background-color: white;
}

#content .jam .jam-details {
  flex: 1;
  display: inline-flex;
}

#content .jam .jam-left {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
}

#content .jam .jam-left h6 {
  margin: 0;
  padding: 0;
  vertical-align: middle;
}

#content .jam .jam-left .jam-title {
  font-size: 13px;
}

#content .jam .jam-right {
  flex: 1;
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 10px;
}

.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

.list-complete-leave-active {
  position: absolute;
}
</style>
