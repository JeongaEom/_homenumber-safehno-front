<script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  // import { tknEncValid } from '@/api';

  const router = useRouter();

  definePageMeta({
    name: "main",
  });

  // const tokenIssuId = ref('ttt');
  const showLoginPage = ref(false);

  onMounted(
    // async () => {
    //   const isValid = await tknEncValid(tokenIssuId.value);
    //   if (isValid) {
    //     showLoginPage.value = true;
        router.push('/login')
    //   } else {
    //     router.push('/login-failed');
    //   }
    // }
  );
</script>

<template></template>