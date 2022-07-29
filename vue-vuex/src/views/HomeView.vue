<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1 :style="colorContador">{{ titulo }}: {{ contador }}</h1>
    <button @click="accionIncremento">incrementar</button>
    <button @click="accionDecrecimiento">decrecer</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
// está dentro de un obj y se llama mapState
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  name: "HomeView",
  // map state devuelve un objeto, si se cooca dentro del otro objeto, no podremos utilizar mas las propiedades computadas
  // para eso se utiliza el spreed operator
  data() {
    return {
      titulo: "Mi contador Vuex",
    };
  },
  computed: {
    ...mapState(["contador"]),
    colorContador() {
      return [this.contador >= 0 ? { color: "green" } : { color: "red" }];
    },
  },
  methods: {
    /* Aquí van el mapeo de las Actions
       Se les pasa como paramtro el nombre de las actions definidas
       en el store/index.js
    
    */
    ...mapActions(["accionIncremento", "accionDecrecimiento"]),
  },
};
</script>
