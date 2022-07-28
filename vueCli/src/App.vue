<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <TituloBanco TituloBanco="Mi banco 2.0" />
    <Cuenta />
  </div>
</template>

<!-- <script setup lang="ts">
import TituloBanco from './components/TituloBanco.vue'
</script> -->
<script lang="ts">
import TituloBanco from "./components/TituloBanco.vue";
import Cuenta from "./components/Cuenta.vue";
import AccionSaldo from "./components/AccionSaldo.vue";

export default {
  name: "App",
  components: {
    TituloBanco,
    Cuenta,
    AccionSaldo,
  },
};
</script>

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
