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
