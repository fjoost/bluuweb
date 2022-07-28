<template>
  <div>
    <h1>{{ texto }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    texto: String,
  },
};
</script>

<style>
h1 {
  font-family: fantasy;
  margin-top: 50;
  font-style: italic;
  color: seagreen;
}
</style>
