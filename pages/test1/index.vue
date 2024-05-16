<script setup>
import { reactive } from "vue";

definePageMeta({
  name: "test"
});

const d = reactive({
  text: "홈넘버표준창 테스트",
  tokenIssuId: "240411132224EX7G",
  encData:
    "j1l7oOjyXvGJmukvCRhQwzENMDVS%2B26pKyKUOhhNLC%2FH%2B%2BswQjmG24qgIeyvLYolANUb2FNrfrbC0Hrvy9yCEVXW4XhoNuu%2FPrXChszEKIeDtJz6q%2BOdFD0wHYhF1qftVaV2HyWBb7s8EDYETsTwJrUBOplIxtiJKI275KVynxi24zUp2%2Br7LQXd4PLhk9PVwegFCvlks9ejwVeklteOKg%3D%3D",
  sign: "XHMACEwxMeve3fbicto6uBjT%2FA%2FMoyQ0nZ%2BPqIuNFHw%3D"
});

const eventClick = () => {
  const width = 480;
  const height = 820;
  const left = window.screen.width / 2 - width / 2;
  // const left = 50;
  const top = window.screen.height / 2 - height / 2;
  const windowFeatures = `width=${width},height=${height},top=${top},left=${left}`;
  const link =
    process.env.NODE_ENV === "development"
      ? `http://localhost:3002`
      : `https://dev-safehno.homenumber.co.kr/`;
  const url = `${link}?tokenIssuId=${d.tokenIssuId}&encData=${d.encData}&sign=${d.sign}`;

  window.open(url, "_blank", windowFeatures);

  console.log("url:", url);
  console.log("tokenIssuId1:", d.tokenIssuId);
  console.log("encData1:", d.encData);
  console.log("sign1:", d.sign);
};
</script>

<template>
  <TitleTop :text="d.text" />
  <section>
    <div class="contents">
      <button @click="eventClick">홈넘버표준창 팝업</button>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
