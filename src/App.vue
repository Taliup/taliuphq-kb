<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Index msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Index from './components/Index.vue'

export default {
  name: 'App',
  components: {
    Index
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  font-family: 'Roboto', sans-serif;
}

.border-btm {
  border-bottom: 1px solid #eeebee;
  padding: 12px 0px;
}

.font-italics {
  font-style: italic;
}
</style>
