<template>
  <h1>{{TituloBanco}}</h1>
</template>

<script setup lang="ts">
defineProps({
  TituloBanco: String
})
</script>
<!-- <script>
export default {
    name: 'TituloBanco',
    props: {
        titulo: String
    }
}
</script> -->

<style scoped>
    h1 {
        font-weight: 300;
    }
</style>
