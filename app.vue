<script setup>
useHead({
  title: "HomNumber"
});
</script>

<template>
  <div class="full-height">
    <NuxtLayout>
      <NuxtPage />
      <Popup />
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
.full-height {
  height: 100vh;
  height: calc(100vh - env(safe-area-inset-bottom));
}
</style>
