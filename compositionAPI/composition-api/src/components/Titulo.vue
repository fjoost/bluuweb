<template>
  <div :style="{ color: color }">contador: {{ signoPeso }}</div>
</template>

<script>
import { computed } from "@vue/reactivity";
export default {
  props: ["contador", "color"],
  /* se configura setup para que reciba/trabaje/acceda con props */
  setup(props) {
    /* entocnes así mediante computed puedo utilizar el prop */
    const signoPeso = computed(() => {
      return "$" + props.contador;
    });
    return { signoPeso };
  },
};
</script>
