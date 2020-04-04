<template>
  <div id="songs-wrapper">
    <h4 class="label">Songs</h4>
    <div class="songs-list" id="songs-section">
      <div v-for="song in songsData" v-bind:key="song.src">
        <SongCard :song='song' />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SongCard from '@/components/sub/songcard'

export default {
  name: 'songs',
  components: {
    SongCard
  },
  computed: {
    ...mapState([
      'songsData'
    ])
  }
}
</script>
