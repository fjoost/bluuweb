<template>
  <div>
    <h1>contador: {{ contador }}</h1>
    <button @click="aumentar">aumentar</button>
    <button @click="disminuir">disminuir</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
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
    return { contador, aumentar, disminuir };
  },
};
</script>
