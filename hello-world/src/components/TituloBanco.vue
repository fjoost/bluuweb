<template>
  <h1>{{titulo}}</h1>
</template>

<script>
export default {
    name: 'TituloBanco',
    props: {
        titulo: String
    }
}
</script>

<style scoped>
    h1 {
        font-weight: 300;
    }
</style>
