<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>contador: {{ contador }}</h1>
    <button @click="sumar">+</button>
    <button @click="restar">-</button>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue'

export default {
  setup () {
    const state = reactive({
      count: 0,
    })
  
    return {
      ...toRefs(state),
    }
  }
}
</script>
