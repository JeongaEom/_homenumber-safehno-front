<script setup>
import { reactive, onMounted, onBeforeUnmount } from "vue";

definePageMeta({
  layout: "default-none",
  name: "iframe test"
});

const d = reactive({
  tokenIssuId: "240411132224EX7G",
  result: true
});

const CB_MESSAGE = (e) => {
  const { data } = e;
  if (data.msg === "SAFE_HNO_SUCCESS") {
    console.log("SAFE_HNO_SUCCESS 👇");
    console.log(data);
    d.result = data;
  }
  // console.log("d.result: ", d.result);
};

onMounted(() => {
  // POSTMESSAGE 대기
  window.addEventListener("message", CB_MESSAGE);
  console.log("uEnvMode - ", uEnvMode());
});

onBeforeUnmount(() => {
  // POSTMESSAGE 대기 해제
  window.removeEventListener("message", CB_MESSAGE);
});
</script>

<template>
  <iframe
    src="https://dev-safehno.homenumber.co.kr/?tokenIssuId=240411132224EX7G&encData=j1l7oOjyXvGJmukvCRhQwzDhrxj0zAFNK13thkW4W6O0/IUuI%2BwCz%2BpyHpU0IlS7eJDAlMrB4%2B/QBGEFsvWucXsnQhE9GBbwh7yURN2TthspXOrhlYJ2RCd4eRYZ/pf8dZqYQ/l7SjXKlBjQyjSYa36wet1%2BRI%2BUyeY5DP1BCcvExMKYdAtwpPiSLZDS4cPa&sign=BoaxcC1Ve29PWRUxP82WgwgFK8wgl4tHHMMusv%2BRSRI="
    width="478"
    height="820"
    frameborder="0"
    @load="handleLoad"
  />

  <div v-if="d.result" class="result-wrap">
    <div class="result-title">Post Message 수신 성공</div>
    <div class="result">
      <div v-for="(val, key) in d.result" class="result-item">
        {{ `${key}: ${val}` }}
      </div>
    </div>
  </div>
</template>

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
  position: absolute;
  left: 50px;
  top: 50px;
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
    word-wrap: break-word;
  }
}
</style>
