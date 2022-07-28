<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1> contador: {{contador}}</h1>
    <button @click="sumar">+</button>
    <button @click="restar">-</button>
  </div>
</template>
<!-- ejercicio, hacer un contador con un boton que (+) y (-) -->
<script>
import { defineComponent } from 'vue';
export default {
  data() {
    return {
      contador: 0
    }
  },
  methods: {
    sumar() {
      this.contador ++
      // return contador
    },
    restar() {
      this.contador --
      // return contador
    }
  },
};
</script>
