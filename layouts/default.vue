<template>
  <div id="app" class="grid">
    <div id="sidebar" class="p-2 bg-teal-500" />
    <div id="view" class="p-2">
      <Nuxt />
    </div>
    <div id="rightbar" class="bg-teal-500" />
  </div>
</template>

<style>
@font-face {
  font-family: 'Quicksand';
  font-display: swap;
  src: url('/fonts/Quicksand/Quicksand-Regular.ttf');
}

@font-face {
  font-family: 'Salsa';
  src: local("Salsa-Regular"), url('/fonts/Salsa/Salsa-Regular.ttf');
}

html {
  font-family: 'Salsa', cursive;
  font-size: 16px;
  word-spacing: 1px;
  letter-spacing: 2px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

html, body {
  height: 100%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

#__nuxt, #__layout {
  height: 100%;
}

#app {
  height: 100%;
  grid-template-columns: 240px auto 240px;
}
</style>
