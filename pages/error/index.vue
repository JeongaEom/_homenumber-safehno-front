<script setup>
import { reactive } from "vue";

definePageMeta({
  name: "error",
});

const d = reactive({
  text: "error"
});


</script>

<template>
<<<<<<< HEAD
  <!-- <TitleTop
  :text="d.text"
  />
  <completed/> -->
=======
  <TitleTop
  :text="d.text"
  />
  <completed/>
>>>>>>> 643c93d73f73d5f621ec552b88a87df5b0be7146
</template>