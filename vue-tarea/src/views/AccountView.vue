<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <MsgComponent msg="Welcome to Your Account Balance" />
    <!-- vmodel.numer: especifica un v-model de tipo number -->
    <!-- <input
      v-model.number="accountBalance"
      type="number"
      step="1000"
      placeholder="Put your f*ckng money!"
    /> -->
    <h3>$ {{ accountBalance }}</h3>
  </div>
</template>

<script>
// @ is an alias to /src
import MsgComponent from "@/components/MsgComponent.vue";
import { mapState } from "vuex";

export default {
  name: "AccountView",
  components: {
    MsgComponent,
  },
  data() {
    return {
      money: "",
    };
  },

  computed: {
    ...mapState(["accountBalance"]),
  },
};
</script>
