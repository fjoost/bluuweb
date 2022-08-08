<template>
  <div>
    <h1>App</h1>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/Login">Login</router-link> |
      <router-link to="/register">Register</router-link> |
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts"></script>
