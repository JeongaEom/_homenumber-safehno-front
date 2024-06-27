<script setup>
import { reactive } from "vue";
import { useRoute, useRouter } from "vue-router";

definePageMeta({
  name: "error"
});

const app = useAppStore();
const route = useRoute();
const router = useRouter();

const d = reactive({
  btntexts: computed(() => {
    if (route.query.butActTy === "CLOSE") {
      return "창닫기";
    }
    return "확인";
  }),
  msg: computed(() => {
    const queryMsg = route.query.errMsg
      ? new TextDecoder().decode(uBase64Decode(route.query.errMsg))
      : false;

    /*
      queryMsg가 존재하면 그것을 반환하고,
      그렇지 않으면 app.error?.message를 반환하며,
      둘 다 존재하지 않는 경우에는 "메시지가 정의되어 있지 않습니다."를 반환
    */
    const errorMessage = app && app.error ? app.error.message : null;

    return queryMsg || errorMessage || "메시지가 정의되어 있지 않습니다.";
  })
});

const buttonClick = () => {
  if (route.query.butActTy === "CLOSE") {
    window.close();
    return;
  }
  // router.replace("/");
  router.replace({
    path: "/homenumberList",
    query: {
      tokenIssuId: app.tokenIssuId,
      encData: app.encData,
      sign: app.sign
    }
  });
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
