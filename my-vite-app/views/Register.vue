<template>
  <div>
    <h1>Register</h1>
    <button @click="userStore.register('Fernando')">Registrar</button>
  </div>
</template>

<script setup>
import { useUserStore } from "../stores/user";
const userStore = useUserStore();
</script>
