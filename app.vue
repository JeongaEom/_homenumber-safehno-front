<script setup>
import { ref, onMounted, onUnmounted } from "vue";

useHead({
  title: "HomNumber",
  meta: [
    // Ios 사파리 CORS문제 해결
    { name: "referrer", content: "no-referrer" }
  ]
});

//모바일 주소창(100vh) 반응 사이즈 조절_ 안드로이드, 아이폰(사파리)
const innerHeight = ref(0);

const updateInnerHeight = () => {
  innerHeight.value = window.innerHeight;
};

onMounted(() => {
  updateInnerHeight(); // 컴포넌트가 마운트될 때 화면 높이를 설정
  window.addEventListener("resize", updateInnerHeight); // 화면 크기가 변경될 때마다 화면 높이를 업데이트
});

onUnmounted(() => {
  window.removeEventListener("resize", updateInnerHeight); // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
});
</script>

<template>
  <div :style="{ height: innerHeight + 'px' }">
    <NuxtLayout>
      <NuxtPage />
      <Popup />
    </NuxtLayout>
  </div>
</template>

<style lang="scss"></style>
