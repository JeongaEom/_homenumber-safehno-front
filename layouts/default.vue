<template>
  <div class="default">
    <Header/>
    <slot/>
  </div>
</template>

<style lang="scss" scoped>
  @media (max-width: 768px) {
    .default {
      height: 100%;
      overflow-x: auto;
      overflow-y: hidden;
    }
  }
</style>