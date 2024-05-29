<template lang="">
    <div>
        <School></School>
        <Student></Student>
    </div>
</template>
<script>
import School from "./05_singleComponent.vue";
import Student from "./06_singleStudent.vue";
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