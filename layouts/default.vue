<template>
  <div class="default">
    <Header />
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@media (max-width: 768px) {
  .default {
    height: 100vh;
    height: 100dvh;
  }
}
</style>
