<template>
  <div>
    <Titulo :contador="contador" :color="color" />
    <h1 :style="{ color: color }">contador: {{ contador }}</h1>
    <input v-model="texto" type="text" />
    <h2>{{ texto }}</h2>
    <hr />
    <p>componente Btn</p>
    <Btn :textoBoton="'Aumentar'" @accion="aumentar" />
    <Btn :textoBoton="'Disminuir'" @accion="disminuir" />
    <!-- <button @click="aumentar">+</button>
    <button @click="disminuir">-</button> -->
  </div>
</template>
s
<script>
import Titulo from "../components/Titulo.vue";
import { computed } from "@vue/reactivity";
import { ref } from "vue";
import Btn from "../components/Btn.vue";

export default {
  components: {
    Titulo,
    Btn,
  },
  setup() {
    /* es un string entonces se le ponen comillas */
    const texto = ref("");

    /* contador esa una referencia al numero 0, por ende es reactivo
    por lo tanto para acceder al valor de contador va contador.value */
    const contador = ref(0);
    /* aumentar: funcion de flecha
      no se accede con this.contador, solo contador.
    */
    const aumentar = () => {
      /* contador es referencia, por lo tanto para acceder al valor se escribe */
      contador.value++;
    };
    const disminuir = () => {
      /* contador es referencia, por lo tanto para acceder al valor se escribe */
      contador.value--;
    };
    /* todo lo que queramos utilizar en el template debe ser retornado dentro del objeto
      ej: quiero utilizar contador y la funcion de aumentar, que me entrega el result.
      por lo tanto se agrega al objeto

    */
    /* computed recibe una función de flecha */
    const color = computed(() => {
      if (contador.value < 0) {
        return "red";
      } else {
        return "blue";
      }
    });
    return { contador, aumentar, disminuir, color, texto };
  },
};
</script>
