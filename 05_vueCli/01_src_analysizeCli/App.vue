<template lang="">
  <div>
      <img src="./assets/logo.png" alt="log">
      <School></School>
      <Student></Student>
  </div>
</template>
<script>
import School from "./components/School";
import Student from "./components/Student";
export default {
  name: "App",
  components: {
      School,
      Student,
  },
};
</script>
<style lang="">
</style>