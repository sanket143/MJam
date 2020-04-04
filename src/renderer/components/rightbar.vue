<template>
  <div id="right-frame">
    <div class="artists">
      <h4>Artists</h4>
      <div class="artist-list">
        <div class="artist-item" v-for="artist in artists" :key='artist'>
          <div
            class="artist-name"
            v-on:click="updateFrame('artist');showArtist(artist)"
          >{{ artist }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      artists: []
    }
  }
}
</script>