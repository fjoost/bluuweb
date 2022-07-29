<template>
  <button>{{ textoBoton }}</button>
</template>

<script>
export default {
  props: {
    estado: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    // repasar propiedades computadas
    textoBoton() {
      // this.estado ? -> pregunta si es, o existe, como primero viene en true, tomará el valor de aumentar
      return this.estado ? "aumentar" : "disminuir";
    },
  },
};
</script>
