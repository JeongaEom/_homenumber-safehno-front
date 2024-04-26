<script setup>
</script>

<template>
  <div class="login">
    <header>
      <div class="inners">
        <img src="@/assets/images/logo_g.png" alt="홈넘버 로고(글씨 회색 버전)">
      </div>
    </header>
    <section>
      <div class="inners">
        <slot/>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
  header {
    .inners {
      width: 12rem;
      padding: 4.5rem 1.2rem;
    }
  }

  @media (max-width: 768px) {
    .login {
      height: 100%;
      overflow-x: auto;
      overflow-y: hidden;
    }
  }
</style>