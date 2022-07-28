<template>
  <Titulo texto="Artículo específico" />
  <h2>Parameter: {{ $route.params.id }}</h2>
</template>

<script>
import Titulo from "../components/Titulo";
export default {
  components: {
    Titulo,
  },
};
</script>
