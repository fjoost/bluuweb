<template>
  <button
    @click="
      accionButton({
        estado: estado,
        numero: 15,
      })
    "
  >
    {{ textoBoton }}
  </button>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {};
  },
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

  methods: {
    ...mapActions(["accionButton"]),
  },
};
</script>
