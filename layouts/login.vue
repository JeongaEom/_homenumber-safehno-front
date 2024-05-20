<script setup>
const closeClick = () => {
  window.close();
};
</script>

<template>
  <div class="login">
    <header>
      <div class="close">
        <img
          src="@/assets/images/icon-close.png"
          alt="닫기"
          @click="closeClick"
        />
      </div>
      <div class="inners">
        <img
          src="@/assets/images/logo_g.png"
          alt="홈넘버 로고(글씨 회색 버전)"
        />
      </div>
    </header>
    <section>
      <div class="inners">
        <slot />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
header {
  .inners {
    width: 12rem;
    padding: 2.55rem 0;
  }
}
.close {
  width: 100%;
  height: 50px;
  position: relative;
  img {
    width: 24px;
    height: 24px;
    position: absolute;
    right: 24px;
    top: 24px;
    cursor: pointer;
    filter: invert(25%) sepia(28%) saturate(389%) hue-rotate(180deg)
      brightness(87%) contrast(92%);
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
