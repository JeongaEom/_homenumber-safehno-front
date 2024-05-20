<script setup>
const closeClick = () => {
  window.close();
};
</script>

<template>
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
    filter: invert(98%) sepia(2%) saturate(373%) hue-rotate(181deg)
      brightness(98%) contrast(89%);
  }
}
</style>
