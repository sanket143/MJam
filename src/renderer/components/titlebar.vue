<template>
  <div class="title-bar-wrapper">
    <div class="title-bar">
      <h6 class="brand-logo">
        <img src="~@/assets/mjam-logo.png" width="19px">
        <span>MJam</span>
      </h6>
      <h6 class="song-title">{{ title }}</h6>

      <div class="action-buttons">
        <span class="minimize"><i class="material-icons">remove</i></span>
        <span class="restore"><i class="material-icons">crop_landscape</i></span>
        <span class="close"><i class="material-icons">close</i></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Slow Hands - Niall Horan'
    }
  }
}
</script>

<style scoped>

.title-bar {
  background: #fafafa;
  display: flex;
  font-family: Salsa, sans-serif;
  position: fixed;
  width: 100vw;
}

.title-bar .brand-logo {
  cursor: pointer;
  width: fit-content;
  margin: 5px;
}

.title-bar .brand-logo > * {
  vertical-align: middle;
}

.title-bar .song-title {
  font-family: 'Source Sans Pro', sans-serif;
  flex: 1;
  -webkit-app-region: drag;
  line-height: 29px;
  margin: 0;
  vertical-align: middle;
  text-align: center;
}

.title-bar .action-buttons {
  margin: 5px;
  display: inline-flex;
  justify-content: flex-end;
}

.title-bar .action-buttons span {
  vertical-align: middle;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10px;
  border-radius: 50%;
  color: white;
  height: 10px;
  font-size: 10px;
  cursor: pointer;
}

.title-bar .action-buttons .minimize {
  background: #2acb43;
  border: 2px solid #2f9e3e;
  margin-right: 6px;
}

.title-bar .action-buttons .restore {
  background: #febf30;
  border: 2px solid #d6a642;
  margin-right: 6px;
}

.title-bar .action-buttons .close {
  background: #ff6258;
  border: 2px solid #be605b;
}

.title-bar .action-buttons .material-icons {
  font-size: 10px;
}
</style>