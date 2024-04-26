<script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  // import { tknEncValid } from '@/api';

  const router = useRouter();

  definePageMeta({
    layout: "default-none",
    name: "main",
  });

  // const p = defineProps({
  //   tokenIssuId: { type: String, default: "" },
  // }); // 임시 업체 요청 데이터

  const d = reactive({
    tokenIssuId: "1234", // 임시 api data
  });

  onMounted(
    async () => {
      try {
        const response = await $axios.$get('https://example.com/api/data')
        responseData.value = response
        // 데이터 처리 로직
        console.log('test:',responseData.value)
        // router.push('/login');
      } catch (error) {
        console.error('API 요청 중 오류 발생:', error)
      }
    },
    () => {
    // 업체에서 쿼리 파라미터 받은걸로 데이터 가져오기
      // const params = new URLSearchParams(window.location.search);
      // const key1 = params.get('key1'); // 'value1'
      // const key2 = params.get('key2'); // 'value2'

      // console.log('key1: ', key1);
      // console.log('key2: ', key2);

      // if(p.tokenIssuId !== d.tokenIssuId){
      //   if(!d.tokenIssuId){
      //     alert ('유효성이 맞지 않습니다.');
      //     window.close();
      //   } else {
      //     router.push('/login');
      //   }
      // }
    }
  );
</script>

<template></template>