<script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  // import { tknEncValid } from '@/api';

  const router = useRouter();

  definePageMeta({
    name: "main",
  });


  onMounted(async () => {
  // 라우터를 통해 로그인 페이지로 이동
  await router.push('/login');

  // 개발테스트 시에만 주석 제거 하여 팝업창 확인, '운영'에는 주석처리
  const width = 480;
  const height = 820;
  const left = (window.screen.width / 2) - (width / 2);
  const top = (window.screen.height / 2) - (height / 2);
  const windowFeatures = `width=${width},height=${height},top=${top},left=${left}`;
  window.open('http://localhost:3002/login', '_blank', windowFeatures);

});
</script>

<template></template>