<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <MsgComponent msg="Rest you money" />
  </div>
</template>

<script>
// @ is an alias to /src
import MsgComponent from "@/components/MsgComponent.vue";

export default {
  name: "DecreaseView",
  components: {
    MsgComponent,
  },
};
</script>
