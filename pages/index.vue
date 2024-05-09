<script setup>
  import { reactive, onMounted } from 'vue';
  import { tknEncValid } from '@/api';

  // 페이지 메타 설정
  definePageMeta({
    layout: "default-none",
    name: "main",
  });

<<<<<<< HEAD
  const d = reactive({
    tokenIssuId: "",
    encData: "",
    sign: "",
=======
  onMounted(async () => {
    const params = new URLSearchParams(window.location.search);
    const dataParam = params.get('data');

    if (dataParam) {
      // URL 쿼리 파라미터로부터 데이터를 파싱
      const data = JSON.parse(decodeURIComponent(dataParam));
      console.log('수신된 데이터:', data);
      app.tokenIssuId = data.tokenIssuId;
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

>>>>>>> 643c93d73f73d5f621ec552b88a87df5b0be7146
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
