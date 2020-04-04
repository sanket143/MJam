<template>
  <div id="songs-wrapper">
    <h4 class="label">Songs</h4>
    <div class="songs-list" id="songs-section">
      <div class="song" v-for="song in songsData" v-bind:key="song.src">
        <div class="song-art" :style="{ 'background-image': 'url(' + song.picture + ')' }">
          <div class="play-toggle" v-if="nowplaying.current !== song.src" v-on:click="playMe(song.src)">
            <i class="material-icons">play_circle_outline</i>
          </div>
          <div class="play-toggle pause-me" v-else v-on:click="pauseMe()">
            <i class="material-icons">pause_circle_outline</i>
          </div>
        </div>
        <div class="song-desc">
          <h6 class="song-title">{{ song.title }}</h6>
          <h5
            class="song-artist"
            v-on:click="updateFrame('artist'); showArtists(song.artist)"
          >{{ song.artists.join(', ') }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'home',
  computed: {
    ...mapState([
      'songsData',
      'nowplaying'
    ])
  },
  methods: {
    click () {
      console.log(this.songsData)
    }
  }
}
</script>
