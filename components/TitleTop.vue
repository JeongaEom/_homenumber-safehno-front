<script setup>
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const p = defineProps({
    link: { type: Boolean, default: false }, // 이전페이지 사용 여부
    linkAddress: { type: String, default: "" }, //이전으로 이동 시 링크
    text: { type: String, default: "" },
  });

  const eventClick = () => {
    router.push(p.linkAddress);
  };
</script>

<template>
  <div class="title-top">
    <div class="inner">
      <button
        v-if="p.link"
        @click="eventClick"
      >
        <img src="@/assets/images/arrow-left.png" alt="이전페이지로">
      </button>
      <div>{{ p.text }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .title-top {
    .inner{
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      padding-bottom: 1.5rem;
      border-bottom: 2px solid $c-g700;
      button {
        width: 24px;
        position: absolute;
        border: none;
        background: none;
      }
      div {
        width: 100%;
        text-align: center;
        font-size: 24px;
        font-weight: bold;
      }
    }
  }
</style>