<script setup>
import { reactive } from "vue";
import { useRoute, useRouter } from "vue-router";

definePageMeta({
  name: "400_error"
});

const route = useRoute();
const router = useRouter();

const d = reactive({
  btntexts: computed(() => {
    if (route.query.butActTy === "CLOSE") {
      return "창닫기";
    }
    return "확인";
  }),
  msg: "400 오류가 발생했습니다."
});

const buttonClick = () => {
  if (route.query.butActTy === "CLOSE") {
    window.close();
    return;
  }
  router.replace("/login");
};
</script>

<template>
  <section>
    <div class="contents">
      <detallError :noDataText="d.msg" />
      <div class="bottom-ct">
        <button class="red-active" @click="buttonClick">
          {{ d.btntexts }}
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@media (min-width: 769px) {
  section {
    .contents {
      height: auto;
      .notData {
        margin-top: 40%;
        min-height: 470px;
      }
      .bottom-ct {
      }
    }
  }
}

@media (max-width: 768px) {
  section {
    margin: 20% 0 0;
    .contents {
      .notData {
      }
      .bottom-ct {
        margin-top: 20%;
      }
    }
  }
}
</style>
