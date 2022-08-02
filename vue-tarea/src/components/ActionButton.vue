<template>
  <input type="number" />
  <button>{{ buttonOperation }}</button>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    buttonState: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    buttonOperation() {
      return this.buttonState ? "Upgrade" : "Rest";
    },
  },
};
</script>
