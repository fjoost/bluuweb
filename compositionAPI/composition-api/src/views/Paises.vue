<template>
  <h1>Lista de paises</h1>
  <p v-for="(pais, index) in arrayData" :key="arrayData.index">
    {{ pais.name.common }}
  </p>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  setup() {
    const arrayData = ref([]);
    // o si no se utiliza onMounted, que
    onMounted(async () => {
      try {
        const response = await fetch("api.json");
        arrayData.value = await response.json();
      } catch (error) {}
    });
    /* 
    // primero se crea la funcion
    const fetchData = async () => {
      try {
        const response = await fetch("api.json");
        arrayData.value = await response.json();
      } catch (error) {}
    };
    // luego se llama
    fetchData(); */
    return { arrayData };
  },
};
</script>
