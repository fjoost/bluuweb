<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <TituloBanco titulo="Mi banco 2.0"/>
  </div>
</template>

<script setup lang="ts">
import TituloBanco from './components/TituloBanco.vue'
</script>
<!-- <script>
import TituloBanco from './components/TituloBanco'

export default {
  name: 'App',
  components: {
    TituloBanco
  }
}
</script> -->

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
