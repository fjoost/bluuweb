<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <MsgComponent msg="Upgrade Your Account!!" />
    <ActionButton />
  </div>
</template>

<script>
// @ is an alias to /src
import MsgComponent from "@/components/MsgComponent.vue";
import ActionButton from "../components/ActionButton.vue";
export default {
  name: "IncreaseView",
  components: {
    MsgComponent,
    ActionButton,
  },
};
</script>
