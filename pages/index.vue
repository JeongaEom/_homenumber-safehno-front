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
    sign: ""
  });

  const parseDataFromURL = async () => {
    const params = new URLSearchParams(window.location.search);
    const tokenIssuId = params.get('tokenIssuId');
    const encData = params.get('encData');
    const sign = params.get('sign');

    d.tokenIssuId = tokenIssuId;
    d.encData = encData;
    d.sign = sign;

    await response();
  };

  const response = async () => {
    try {
      await tknEncValid(d.tokenIssuId, d.encData, d.sign);
    } catch (error) {
      console.error("API 호출 중 오류 발생:", error);
    }
  };

  console.log('response: ', response);

  onMounted(async() => {
    await parseDataFromURL();
  });
</script>

<template>
</template>
