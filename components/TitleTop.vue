<script setup>
import { useRouter } from "vue-router";
import { useAppStore } from "@/stores";

const router = useRouter();
const app = useAppStore();

const p = defineProps({
  link: { type: Boolean, default: false }, // 이전페이지 사용 여부
  text: { type: String, default: "" },
  number: { type: Number, default: "" },
  hasBackButton: { default: false },
});

const eventClick = () => {
  if (typeof p.hasBackButton === "function") {
    p.hasBackButton();
  } else {
    router.go(-1);
  }
};
</script>

<template>
  <div class="title-top">
    <div class="inner">
      <button v-if="p.hasBackButton" @click="eventClick">
        <img src="@/assets/images/arrow-left.png" alt="이전페이지로" />
      </button>
      <div>
        {{ p.text }}
        <span v-if="p.number">{{ p.number }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title-top {
  .inner {
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
      span {
        margin-left: 4px;
        color: $c-b500;
      }
    }
  }
}
</style>
