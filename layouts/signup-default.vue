<template>
  <div class="default">
    <Header />
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.default{overflow-y:auto; height: 100vh;}

@media (max-width: 768px) {
  .default {
    height: 100vh;
    height: 100dvh;
    
  }
}
</style>
