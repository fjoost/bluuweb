<template>
  <Titulo texto="Página de Blog 2022" />
  <button @click="consumirAPI">Consumir API</button>
</template>

<script>
import Titulo from "../components/Titulo.vue";
export default {
  components: {
    Titulo,
  },
  data() {
    return {
      arrayBlog: [],
    };
  },
  methods: {
    // async
    async consumirAPI() {
      try {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts/");
        const array = await data.json();
        console.log(array);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
