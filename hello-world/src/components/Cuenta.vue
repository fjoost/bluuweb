<template>
  <h3>Saldo: {{saldo}}</h3>
  <h4>Cuenta: {{cuenta}}</h4>
  <h4>Estado: {{estado ? 'Activa' : 'Cerrada'}}</h4>
  <h4 class="mb-0">Servicios disponibles: </h4>
  <div v-for="(item, index) in servicios" :key="index">
      {{ index + 1 }} - {{ item }}
  </div>
</template>

<script>
export default {
    data() {
        return {
            cuenta: 'Visa',
            saldo: 5000,
            estado: true,
            servicios: ['pagos','giros','transferencias']
        }
    }
}
</script>

<style>
    .mb-0 {
        margin-bottom: 0.5rem;
    }
</style>
