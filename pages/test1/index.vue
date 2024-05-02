<script setup>
  import { reactive } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  definePageMeta({
    name: "test",
  });

  const d = reactive({
    text: "홈넘버 새창 테스트(업체)",
  })

  const fetchMockData = async () => {
    // 비동기 처리를 모방하기 위해 Promise와 setTimeout을 사용합니다.
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          tokenIssuId: "240411132224EX7G",
          encData: "j1l7oOjyXvGJmukvCRhQw6pVGACNQ8CpjRycl+oglPdzOk4NqK3ol94cpZuVlvlNUtOh/YNr+6Xtc5Q8WHv3qquTRTgNlaMy9b3CR6O4AxbAGvVkRNtzo9C26wmMez3BIwrT/2S7TDR+bppobVFcnw==",
          sign: "mL3BWUrR7dflijDl/3HUuihL40cICf6FbO8CZCWf45U=",
        });
      }, 1000); // 1초 후에 데이터 반환
    });
  };

  const eventClick = async () => {
    try {
      const Data = await fetchMockData();

      const width = 480;
      const height = 820;
      const left = (window.screen.width / 2) - (width / 2);
      const top = (window.screen.height / 2) - (height / 2);
      const windowFeatures = `width=${width},height=${height},top=${top},left=${left}`;

      // 데이터를 URL 쿼리 파라미터로 추가
      const url = `http://localhost:3002?data=${encodeURIComponent(JSON.stringify(Data))}`;
      window.open(url, '_blank', windowFeatures);

      console.log('데이터 전송 성공:', Data);
    } catch (error) {
      console.error('데이터 전송 실패:', error);
    }
  }

  defineExpose({ eventClick });

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