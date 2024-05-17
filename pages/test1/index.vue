<script setup>
import { reactive } from "vue";

definePageMeta({
  name: "test"
});

const d = reactive({
  text: "홈넘버표준창 테스트",
  tokenIssuId: "240411132224EX7G",
  encData:
    "j1l7oOjyXvGJmukvCRhQwzDhrxj0zAFNK13thkW4W6O0%2FIUuI%2BwCz%2BpyHpU0IlS7eJDAlMrB4%2B%2FQBGEFsvWucXsnQhE9GBbwh7yURN2TthspXOrhlYJ2RCd4eRYZ%2Fpf8dZqYQ%2Fl7SjXKlBjQyjSYa36wet1%2BRI%2BUyeY5DP1BCcvExMKYdAtwpPiSLZDS4cPa",
  sign: "BoaxcC1Ve29PWRUxP82WgwgFK8wgl4tHHMMusv%2BRSRI%3D",
  result: null
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
};

const CB_MESSAGE = (e) => {
  const { origin, data } = e;
  if (data.msg === "SAFE_HNO_SUCCESS") {
    console.log("SAFE_HNO_SUCCESS 👇");
    console.log(data);
    d.result = data;
  }
};

onMounted(() => {
  // POSTMESSAGE 대기
  window.addEventListener("message", CB_MESSAGE);
});

onBeforeUnmount(() => {
  // POSTMESSAGE 대기 해제
  window.removeEventListener("message", CB_MESSAGE);
});
</script>

<template>
  <TitleTop :text="d.text" />
  <section>
    <div class="contents">
      <button class="popup-call-btn" @click="eventClick">
        홈넘버표준창 팝업
      </button>
    </div>
    <div v-if="d.result" class="result-wrap">
      <div class="result-title">Post Message 수신 성공</div>
      <div class="result">
        <div v-for="(val, key) in d.result" class="result-item">
          {{ `${key}: ${val}` }}
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
body {
  width: auto;
  height: auto;
}
section {
  border: none;
}
section > .contents {
  height: auto;
}
</style>

<style lang="scss" scoped>
.popup-call-btn {
  display: block;
  max-width: 250px;
  margin-left: auto;
  margin-right: auto;
}
.result-wrap {
  border: solid 1px black;
  margin-left: auto;
  margin-right: auto;
  max-width: 700px;
  padding: 30px;
}
.result-title {
  margin-bottom: 30px;
  font-size: 25px;
  text-align: center;
  font-weight: bold;
}
.result {
  margin-top: 20px;
  .result-item {
    margin-top: 15px;
    font-size: 18px;
  }
}
</style>
