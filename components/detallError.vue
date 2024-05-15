<script setup>
  const p = defineProps({
    noDataText: { type: String, default: "" },
    noDataText1: { type: String, default: "" },
    noDataText2: { type: String, default: "" }
  });
</script>

<template>
  <div class="notData">
    <img src="@/assets/images/data-no.png" alt="홈넘버 데이터 없음">
    <!-- 1줄 사용 시 -->
    <p v-if="noDataText">{{ p.noDataText }}</p>
    <!-- 2줄 사용 시 -->
    <p v-if="!noDataText">{{ p.noDataText1 }}</p>
    <p v-if="!noDataText">{{ p.noDataText2 }}</p>
  </div>
</template>

<style lang="scss" scoped>
  .notData {
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 5rem;
      margin-bottom: 30px;
    }
    p {
      font-weight: bold;
      font-size:24px;
      text-align: center;
    }
  }
</style>