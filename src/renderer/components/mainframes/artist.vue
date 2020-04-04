<template>
  <div id="artist-wrapper">
    <h4 class="label">Niall Horan</h4>
    <div class="songs-list" id="songs-section">
      <div class="song">
        <div class="song-art" :style="{ 'background-image': 'url(~@/assets/mjam-default)' }">
          <i class="material-icons">play_circle_outline</i>
        </div>
        <div class="song-desc">
          <h6 class="song-title">Slow Hands</h6>
          <h5
            class="song-artist"
            v-on:click="updateFrame('artist'); showArtists(song.artist)"
          >Niall Horan</h5>
        </div>
      </div>
    </div>
  </div>
</template>