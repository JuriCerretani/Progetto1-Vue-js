<!-- <template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->

<template>
  <div id="app">
    <Tris></Tris>
  </div>
</template>

<script>
import Tris from './components/tris-game.vue'

export default {
  name: 'App',
  components: { Tris }
}
</script>

<style lang="scss">

  body {
    margin: 0;
    background-color: #EFE6F2;
    font-family: "Arial", sans-serif;
    text-align: center;
  }

</style>
