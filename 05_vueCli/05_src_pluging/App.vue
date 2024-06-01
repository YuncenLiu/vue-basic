<template>
  <div>
    <School />
    <hr />
    <Edu />
  </div>
</template>
<script>
import School from "./components/School.vue";
import Edu from "./components/Edu.vue";
export default {
  name: "App",
  components: {
    School,
    Edu,
  },
  data() {
    return {
      msg: "1",
    };
  },
  methods: {},
};
</script>
<style lang=""></style>
