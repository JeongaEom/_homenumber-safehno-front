<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const p = defineProps({
  topText: { type: String, default: "" },
  btntext: { type: String, default: "" },
  height: { type: Number, default: 0 }
});

const endnextClick = () => {
  // 로그인 시 홈넘버 조회로 이동
  router.push("/homenumberList");
};
</script>

<template>
  <div class="contents" :style="{ height: p.height + 'px' }">
    <div>
      <img src="@/assets/images/data-end.png" alt="홈넘버 데이터 없음" />
      <div>
        <p v-html="p.topText" />
      </div>
    </div>
  </div>
  <button class="bg-w line-active" @click="endnextClick()">
    {{ p.btntext }}
  </button>
</template>

<style lang="scss" scoped>
.contents {
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    img {
      width: 70px;
      margin: 0 auto 10%;
      display: block;
    }
    div {
      font-size: 24px;
      text-align: center;
      font-weight: bold;
      line-height: 3rem;
    }
  }
}
</style>
