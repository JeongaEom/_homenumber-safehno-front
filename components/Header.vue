<script setup>
const closeClick = () => {
  window.close();
};
</script>

<template>
  <header>
    <div class="close" @click="closeClick">
      <img src="@/assets/images/icon-close.png" alt="닫기" />
    </div>
    <div class="inners">
      <img
        src="@/assets/images/logo_w.png"
        alt="홈넘버 로고(글씨 화이트 버전)"
      />
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  max-height: 5rem;
  min-height: 80px;
  background-color: $c-g900;
  .inners {
    width: 10rem;
    padding: 0.8rem;
    margin-top: -77px;
  }
}
.close {
  width: 100%;
  height: 80px;
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
</style>
