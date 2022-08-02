<template>
  <input type="number" />
  <!-- Al hacer click ejecutaremos  la action buttonAction presente en methods y se le pasa un objeto -->
  <button
    @click="
      buttonAction({
        state: buttonState,
        payload: 15,
      })
    "
  >
    {{ buttonOperation }}
  </button>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  /* Desde la vista padre envio dato, en este caso el estado del button */
  props: {
    buttonState: {
      type: Boolean,
      default: true,
    },
  },
  /* Se utiliza para realizar cierto calculo o logica dentro del componente */
  computed: {
    buttonOperation() {
      return this.buttonState ? "Upgrade" : "Rest";
    },
  },
  /* En los methods van los mapActions */
  methods: {
    ...mapActions(["buttonAction"]),
  },
};
</script>
