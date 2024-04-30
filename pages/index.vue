<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { tknEncValid } from '@/api';

// 페이지 메타 설정
definePageMeta({
  layout: "default-none",
  name: "main",
});

// 반응형 데이터 선언
// const token = ref("");
// const tokenIssu = ref("");
const tokenIssuId = ref("");
const encData = ref("");
const sign = ref("");

const router = useRouter();

onMounted(async () => {
  const params = new URLSearchParams(window.location.search);
  const dataParam = params.get('data');

  if (dataParam) {
    // URL 쿼리 파라미터로부터 데이터를 파싱합니다.
    const data = JSON.parse(decodeURIComponent(dataParam));
    console.log('수신된 데이터:', data);
    tokenIssuId.value = data.tokenIssuId;
    encData.value = data.encData
    sign.value = data.sign
    console.log('tokenIssuId.value:', tokenIssuId.value);
    console.log('encData.value:', encData.value);
    console.log('sign.value:', sign.value);
  }

  try {
    await tknEncValid(tokenIssuId.value, encData.value, sign.value);
    console.log('tokenIssuId:', tokenIssuId.value);
    console.log('encData:', encData.value);
    console.log('sign:', sign.value);

    // // if(token.value === tokenIssuId.value) {
    // if(tokenIssuId.value) {
    //   router.push('/login');
    // }
  }
  catch (error) {
    console.error('에러 처리:', error);
    alert('암호화 토큰 유효성이 맞지않습니다. 다시 시도해주세요.');
  }
});
</script>

<template></template>
