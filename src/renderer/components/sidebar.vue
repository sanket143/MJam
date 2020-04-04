<template>
  <div id="sidebar-wrapper">
    <div id="sidebar">
      <h4 class="label">Library</h4>
      <div class="sidebar-buttons">
        <router-link
          class="sidebar-button"
          v-bind:class="{'is-active': route === 'home'}"
          to='/'
        >
          <i class="material-icons">home</i>
          <span>Home</span>
        </router-link>
        <router-link
          class="sidebar-button"
          v-bind:class="{'is-active': route === 'playlists'}"
          to='/playlists'
        >
          <i class="material-icons">playlist_play</i>
          <span>Playlists</span>
        </router-link>
        <router-link
          class="sidebar-button"
          v-bind:class="{'is-active': route === 'loved'}"
          to='/loved'
        >
          <i class="material-icons">favorite</i>
          <span>Loved</span>
        </router-link>
        <router-link
          class="sidebar-button"
          v-bind:class="{'is-active': route === 'songs'}"
          to='/songs'
        >
          <i class="material-icons">music_note</i>
          <span>Songs</span>
        </router-link>
        <router-link
          class="sidebar-button"
          v-bind:class="{'is-active': route === 'settings'}"
          to='/settings'
        >
          <i class="material-icons">settings</i>
          <span>Settings</span>
        </router-link>
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
  },
  computed: {
    route: function () {
      return this.$route.name
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
  color: black;
  text-decoration: none;
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
