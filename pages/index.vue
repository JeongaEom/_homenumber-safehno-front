<script setup>
  import { onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import { useAppStore } from '@/stores/app'
  import { tknEncValid } from '@/api';

  const router = useRouter();
  const app = useAppStore();

  // 페이지 메타 설정
  definePageMeta({
    layout: "default-none",
    name: "main",
  });

  onMounted(async () => {
    const params = new URLSearchParams(window.location.search);
    const dataParam = params.get('data');

    if (dataParam) {
      // URL 쿼리 파라미터로부터 데이터를 파싱
      const data = JSON.parse(decodeURIComponent(dataParam));
      console.log('수신된 데이터:', data);
      app.tokenIssuId = data.tokenIssuId;
      // app.tokenIssuId = "240411132224EX";
      app.encData = data.encData
      app.sign = data.sign

      console.log('app.tokenIssuId:', app.tokenIssuId);
      console.log('app.encData:', app.encData);
      console.log('app.sign:', app.sign);
    }

    const response = await tknEncValid(app.tokenIssuId, app.encData, app.sign);

    console.log('tokenIssuId:', app.tokenIssuId);
    console.log('encData:', app.encData);
    console.log('sign:', app.sign);

    console.log('응답:', response);
    console.log('응답코드:', response.code);
  });
</script>

<template>
</template>
