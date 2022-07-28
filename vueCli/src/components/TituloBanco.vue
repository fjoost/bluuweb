<template>
  <h1>{{ TituloBanco }}</h1>
</template>

<script lang="ts">
export default {
  props: {
    TituloBanco: String,
  },
};
</script>
<!-- <script setup lang="ts">
      defineProps({
        TituloBanco: String
      })
      </script> -->

<style scoped>
h1 {
  font-weight: 300;
  font-style: italic;
  color: brown;
}
</style>
