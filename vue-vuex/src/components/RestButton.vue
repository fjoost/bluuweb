<template>
  <button @click="accionDecrecimiento">Rest</button>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["accionDecrecimiento"]),
  },
};
</script>
