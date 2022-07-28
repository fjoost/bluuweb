<template>
  <h3>Saldo: {{ cantidad }}</h3>
  <h4>Cuenta: {{ cuenta }}</h4>
  <h4>Estado: {{ estado ? "Activa" : "Cerrada" }}</h4>
  <h4 class="mb-0">Servicios disponibles:</h4>
  <div v-for="(item, index) in servicios" :key="index">
    {{ index + 1 }} - {{ item }}
  </div>
  <hr />
  <AccionSaldo texto="Agregar Saldo" @accion="agregarSaldo" />
  <AccionSaldo
    texto="Disminur Saldo"
    @accion="disminuirSaldo"
    :desactivar="desactivar"
  />
</template>

<script>
import AccionSaldo from "./AccionSaldo.vue";
export default {
  components: {
    AccionSaldo,
  },
  data() {
    return {
      cuenta: "Visa",
      cantidad: 500,
      estado: true,
      servicios: ["pagos", "giros", "transferencias"],
      desactivar: false,
    };
  },
  methods: {
    agregarSaldo() {
      this.cantidad = this.cantidad + 100;
      this.desactivar = false;
    },
    disminuirSaldo() {
      if (this.cantidad === 0) {
        this.desactivar = true;
        alert("llegaste al final");
        return;
      }
      this.cantidad = this.cantidad - 100;
    },
  },
};
</script>
