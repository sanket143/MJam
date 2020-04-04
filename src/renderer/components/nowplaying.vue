<template>
  <div id="bottom-frame">
    <div id="nowplaying" v-show="nowplaying.song != ''">
      <div class="seekbar-wrapper">
        <div class="seekbar-cover">
          <div class="seekbar">
            <div class="progress" :style="{ 'width': completion + '%'}"></div>
            <div class="handle" :style="{ 'margin-left': completion + '%'}"></div>
          </div>
        </div>
      </div>
      <div class="now-playing-wrapper">
        <div class="now-playing-track">
          <div
            class="now-playing-art"
            :style="{'background-image': 'url(' + nowplaying.song.picture + ')'}"
          ></div>
          <div class="now-playing-details">
            <h5 class="now-playing-track-title">{{ nowplaying.song.title }}</h5>
            <h6 class="now-playing-track-artist">{{ nowplaying.song.artists.join(', ') }}</h6>
          </div>
        </div>
        <div class="now-playing-controls">
          <button id="prev">
            <i class="material-icons">skip_previous</i>
          </button>
          <button id="toggle" v-if="!paused" v-on:click="pause()">
            <i class="material-icons">pause_circle_filled</i>
          </button>
          <button id="toggle" v-else v-on:click="play()">
            <i class="material-icons">play_circle_filled</i>
          </button>
          <button id="next">
            <i class="material-icons">skip_next</i>
          </button>
        </div>
        <div class="now-playing-options">
          <!-- <input type="range" min="0" max="100" value="50" class="volume-tweak" id="volume"> -->
          <button id="loved">
            <i class="material-icons">favorite</i>
          </button>
          <!-- <button id="repeat" :class="{active: repeat}" v-on:click="toggleRepeat()"><i class="material-icons">repeat</i></button> -->
          <!-- <button id="shuffle"><i class="material-icons">shuffle</i></button> -->
        </div>
      </div>
    </div>
  </div>
</template>