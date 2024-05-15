<script setup>
const p = defineProps({
  noDataText: { default: "" },
});
</script>

<template>
  <div class="notData">
    <img src="@/assets/images/data-no.png" alt="홈넘버 데이터 없음" />
    <p v-if="noDataText" v-html="p.noDataText" />
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
    font-size: 24px;
    text-align: center;
  }
}
</style>
