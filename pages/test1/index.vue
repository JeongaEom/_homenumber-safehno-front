<script setup>
  // import { reactive } from 'vue';
  import { reactive, onMounted } from 'vue';
  import { tknEncValid } from '@/api';

  definePageMeta({
    name: "test",
  });

  const d = reactive({
    text: "홈넘버표준창 테스트",
    tokenIssuId: "240411132224EX7G",
    // encData: "j1l7oOjyXvGJmukvCRhQwzENMDVS%2B26pKyKUOhhNLC%2FH%2B%2BswQjmG24qgIeyvLYolANUb2FNrfrbC0Hrvy9yCEVXW4XhoNuu%2FPrXChszEKIeDtJz6q%2BOdFD0wHYhF1qftVaV2HyWBb7s8EDYETsTwJrUBOplIxtiJKI275KVynxi24zUp2%2Br7LQXd4PLhk9PVwegFCvlks9ejwVeklteOKg%3D%3D",
    // sign: "XHMACEwxMeve3fbicto6uBjT%2FA%2FMoyQ0nZ%2BPqIuNFHw%3D"
    encData: "j1l7oOjyXvGJmukvCRhQwzENMDVS+26pKyKUOhhNLC/H++swQjmG24qgIeyvLYolANUb2FNrfrbC0Hrvy9yCEVXW4XhoNuu/PrXChszEKIeDtJz6q+OdFD0wHYhF1qftVaV2HyWBb7s8EDYETsTwJrUBOplIxtiJKI275KVynxi24zUp2+r7LQXd4PLhk9PVwegFCvlks9ejwVeklteOKg==",
    sign: "XHMACEwxMeve3fbicto6uBjT/A/MoyQ0nZ+PqIuNFHw="
  })

  const response = async () => {
    try {
      await tknEncValid(d.tokenIssuId, d.encData, d.sign);
    } catch (error) {
      console.error("API 호출 중 오류 발생:", error);
    }
  };
  // response();

  const eventClick = () => {
    const width = 480;
    const height = 820;
    const left = (window.screen.width / 2) - (width / 2);
    const top = (window.screen.height / 2) - (height / 2);
    const windowFeatures = `width=${width},height=${height},top=${top},left=${left}`;

    const tokenIssuId = d.tokenIssuId;
    const encData = d.encData;
    const sign = d.sign;

    // 데이터를 URL 쿼리 파라미터로 추가
    const url = `http://localhost:3002?tokenIssuId=${tokenIssuId}&encData=${encData}&sign=${sign}`;

    // const link = `${process.env.NODE_ENV === 'production' ? process.env.PROD_URL : process.env.NODE_ENV === 'development' ? process.env.DEV_URL : process.env.LOCAL_URL}`;
    // const url = link + `?tokenIssuId=${tokenIssuId}&encData=${encData}&sign=${sign}`;

    window.open(url, '_blank', windowFeatures);

    // console.log('link:', link);
    console.log('url:', url);
    console.log('tokenIssuId1:', tokenIssuId);
    console.log('encData1:', encData);
    console.log('sign1:', sign);
  };
  onMounted(async() => {
    await response();
  });
</script>

<template>
  <TitleTop :text="d.text" />
  <section>
    <div class="contents">
      <button @click="eventClick">홈넘버표준창 팝업</button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
</style>