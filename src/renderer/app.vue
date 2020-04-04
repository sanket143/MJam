<template>
  <div id="app">
    <TitleBar />
    <router-view></router-view>
  </div>
</template>

<script>
import TitleBar from '@/components/titlebar'

export default {
  name: 'mjam',
  components: {
    TitleBar
  }
}
</script>

<style>
  /* CSS */
  
body {
  display: grid;
  height: 100vh;
  grid-template-rows: 30px auto 80px;
}


button {
  outline: none;
}

/* latin */
@font-face {
  font-family: 'Salsa';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Salsa-Regular'), url(./assets/fonts/Salsa.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(~@/assets/fonts/Material-Icons.woff2) format('woff2');
}

::-webkit-scrollbar {
    display: none;
}

/* latin-ext */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'), url(~@/assets/fonts/Source-Sans-Pro.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'), url(~@/assets/fonts/Source-Sans-Pro-Latin.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

.material-icons {
  font-family: 'Material Icons';
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
  -moz-font-feature-settings: 'liga';
  -moz-osx-font-smoothing: grayscale;
}

</style>
