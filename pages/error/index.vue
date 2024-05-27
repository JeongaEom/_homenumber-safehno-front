<script setup>
import { reactive } from "vue";

definePageMeta({
  name: "error"
});

const app = useAppStore();
const route = useRoute();

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
    return queryMsg
      ? queryMsg
      : app.error?.message
        ? app.error?.message
        : "메시지가 정의되어 있지 않습니다.";
  })
});

const buttonClick = () => {
  if (route.query.butActTy === "CLOSE") {
    window.close();
    return;
  }
  const router = useRouter();
  router.replace("/");
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
.notData {
  margin-top: 40%;
  min-height: 433px;
}
</style>
