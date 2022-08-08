<template>
  <div>
    <h1>Login - {{ userStore.toMinusc }}</h1>
  </div>
</template>

<script setup>
import { useUserStore } from "../stores/user";
const userStore = useUserStore();
</script>
