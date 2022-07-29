<template>
  <Titulo texto="Artículo específico" />
  <h2>Blog Nro: {{ $route.params.id }}</h2>
  <h3>{{ articulo.title }}</h3>
  <hr />
  <p>{{ articulo.body }}</p>
</template>

<script>
import Titulo from "../components/Titulo";
export default {
  components: {
    Titulo,
  },
  data() {
    return {
      articulo: {},
    };
  },
  methods: {
    async getArticulo() {
      try {
        console.log(this.$route.params.id);
        const data = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`
        );
        // devuelve un objeto, revisar sitio para confirmar.
        const objeto = await data.json();
        this.articulo = objeto;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getArticulo();
  },
};
</script>
