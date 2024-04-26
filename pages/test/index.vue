<script setup>
  import { reactive, onMounted } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  definePageMeta({
    name: "test",
  });

  const d = reactive({
    text: "홈넘버 새창 테스트(업체)",
    tokenIssuId: "1234",
    encData: "",
    sign: ""
  })

  const eventClick = () => {
    const width = 480;
    const height = 820;
    const left = (window.screen.width / 2) - (width / 2);
    const top = (window.screen.height / 2) - (height / 2);
    const windowFeatures = `width=${width},height=${height},top=${top},left=${left}`;
    window.open(`http://localhost:3002`, '_blank', windowFeatures);

    // const myData = {
    //   key1: 'value1',
    //   key2: 'value2'
    // };
    // const queryParams = new URLSearchParams(myData).toString();

    // window.open(`http://localhost:3002?${queryParams}`, '_blank', windowFeatures);

    console.log('test: ');
  }

  onMounted(
  // 라우터를 통해 로그인 페이지로 이동
  // router.push('/login');
);
</script>

<template>
  <TitleTop :text="d.text" />
  <section>
    <div class="contents">
      <button
        @click="eventClick"
      >
        테스트
      </button>
    </div>
  </section>
</template>

<style lang="scss" scoped>

</style>