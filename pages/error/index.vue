<script setup>
import { reactive } from "vue";

definePageMeta({
  name: "error",
});

const d = reactive({
  noDataText1: "에러 페이지",
  noDataText2: "테스트입니다.",
  btntexts: "확인"
});

const closeClick = () => {

}

</script>

<template>
  <section>
    <div class="contents">
      <detallError
        :noDataText1="d.noDataText1"
        :noDataText2="d.noDataText2"
      />
      <div class="bottom-ct">
        <button class="red-active" @click="closeClick">{{ d.btntexts }}</button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .notData {
    margin-top: 40%;
    min-height: 433px;
  }
</style>