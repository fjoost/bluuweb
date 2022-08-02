<template>
  <div>
    <Titulo :contador="contador" />
    <hr />
    <p>componente Btn</p>
    <Btn :textoBoton="'Aumentar'" @accion="aumentar" />
    <Btn :textoBoton="'Disminuir'" @accion="disminuir" />
    <!-- <button @click="aumentar">+</button>
    <button @click="disminuir">-</button> -->
  </div>
</template>

<script>
import Titulo from "../components/Titulo.vue";
import { computed } from "@vue/reactivity";
import Btn from "../components/Btn.vue";
import { useContador } from "../composables/useContador";

export default {
  components: {
    Titulo,
    Btn,
  },
  setup() {
    /* siempre hay que retornar */
    /* useContador es una funcion, termina en par'entesis */
    return { ...useContador() };
  },
};
</script>
