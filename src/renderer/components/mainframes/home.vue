<template>
  <div id="home-wrapper">
    <h4 class="label">Recently Played</h4>
    <transition-group name="list-complete" tag="div" class="songs-list" id="recent-home-section">
      <div class="song list-complete-item" v-for="song in recent_songs" v-bind:key="song.src">
        <div class="song-art" :style="{ 'background-image': 'url(' + song.picture.data + ')' }">
          <div class="play-toggle" v-if="current !== song.src" v-on:click="playMe(song.src)">
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
          >{{ song.artist }}</h5>
        </div>
      </div>
    </transition-group>
  </div>
</template>