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
  sign: "BoaxcC1Ve29PWRUxP82WgwgFK8wgl4tHHMMusv%2BRSRI%3D"
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
