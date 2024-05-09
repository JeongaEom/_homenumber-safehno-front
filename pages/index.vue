<script setup>
  import { reactive, onMounted } from 'vue';
  import { tknEncValid } from '@/api';

  // 페이지 메타 설정
  definePageMeta({
    layout: "default-none",
    name: "main",
  });

  const d = reactive({
    tokenIssuId: "",
    encData: "",
    sign: "",
  });

  onMounted(
    async () => {
      const params = new URLSearchParams(window.location.search);
      const dataParam = params.get('data');

      if (dataParam) {
        // URL 쿼리 파라미터로부터 데이터를 파싱
        const data = JSON.parse(decodeURIComponent(dataParam));
        console.log('수신된 데이터:', data);
        d.tokenIssuId = data.tokenIssuId;
        d.encData = data.encData
        d.sign = data.sign

        console.log('d.tokenIssuId:', d.tokenIssuId);
        console.log('d.encData:', d.encData);
        console.log('d.sign:', d.sign);
      }

      const response = await tknEncValid(d.tokenIssuId, d.encData, d.sign);

      console.log('tokenIssuId:', d.tokenIssuId);
      console.log('encData:', d.encData);
      console.log('sign:', d.sign);

      console.log('응답_유효성 검사:', response);
    }
  );
</script>

<template>
</template>
