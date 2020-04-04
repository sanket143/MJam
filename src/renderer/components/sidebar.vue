<template>
  <div id="sidebar-wrapper">
    <div id="sidebar">
      <h4 class="label">Library</h4>
      <div class="sidebar-buttons">
        <a
          class="sidebar-button"
          v-bind:class="{'is-active': frame === 'home'}"
          v-on:click="updateFrame('home')"
        >
          <i class="material-icons">home</i>
          <span>Home</span>
        </a>
        <a
          class="sidebar-button"
          v-bind:class="{'is-active': frame === 'playlists'}"
          v-on:click="updateFrame('playlists')"
        >
          <i class="material-icons">playlist_play</i>
          <span>Playlists</span>
        </a>
        <a
          class="sidebar-button"
          v-bind:class="{'is-active': frame === 'loved'}"
          v-on:click="updateFrame('loved')"
        >
          <i class="material-icons">favorite</i>
          <span>Loved</span>
        </a>
        <a
          class="sidebar-button"
          v-bind:class="{'is-active': frame === 'songs'}"
          v-on:click="updateFrame('songs')"
        >
          <i class="material-icons">music_note</i>
          <span>Songs</span>
        </a>
        <a
          class="sidebar-button"
          v-bind:class="{'is-active': frame === 'settings'}"
          v-on:click="updateFrame('settings')"
        >
          <i class="material-icons">settings</i>
          <span>Settings</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      frame: 'home'
    }
  }
}
</script>

<style scoped>

#sidebar {
  height: 100%;
  padding-left: 50px;
  padding-right: 50px;
  font-family: Salsa, sans-serif;
}

#sidebar .label {
  width: 51px;
  height: 18px;
  color: #000000;
  font-size: 15px;
  font-weight: 400;
}

#sidebar .sidebar-buttons {
  display: flex;
  flex-direction: column;
}

#sidebar .sidebar-button {
  margin-bottom: 10px;
  background: none;
  border: none;
  border-left: 3px solid transparent;
  padding-left: 10px;
  width: 100px;
  cursor: pointer;
}

#sidebar .sidebar-button.is-active {
  color: #eb6d7f;
}

#sidebar .sidebar-button:hover {
  color: crimson;
}

#sidebar .sidebar-button i {
  font-size: 17px;
  vertical-align: middle;
}

#sidebar .sidebar-button span {
  width: 47px;
  height: 18px;
  font-family: Salsa;
  font-size: 15px;
  font-weight: 400;
  vertical-align: middle;
}

</style>