<template>
  <button @click="accionBtnHijo">{{ textoBoton }}</button>
</template>

<script>
export default {
  props: ["textoBoton"],
  setup(props, context) {
    const accionBtnHijo = () => {
      context.emit("accion");
    };
    return { accionBtnHijo };
  },
};
</script>
