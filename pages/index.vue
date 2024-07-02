<script setup>
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { tknEncValid } from "@/api";

const route = useRoute();
const router = useRouter();
const app = useAppStore();

// 페이지 메타 설정
definePageMeta({
  layout: "default-none",
  name: "main"
});

const tokenIssuId = route.query.tokenIssuId;
const encData = route.query.encData;
const sign = route.query.sign;
const satk = route.query.satk;

app.tokenIssuId = tokenIssuId;
app.encData = encData;
app.sign = sign;
app.satk = satk;

console.log("app.tokenIssuId_: ", app.tokenIssuId);
console.log("app.encData_: ", app.encData);
console.log("app.sign_: ", app.sign);
console.log("app.satk_: ", app.satk);

const tkn = async () => {
  // 2.16 암호화 토큰 유효성 검사 후 로그인페이지(팝업창) 실행
  const result = await tknEncValid(
    app.tokenIssuId,
    app.encData,
    app.sign,
    app.satk
  );
  console.log("app.tokenIssuId_메인: ", app.tokenIssuId);
  console.log("app.encData_메인: ", app.encData);
  console.log("app.sign_메인: ", app.sign);
  console.log("app.satk_메인: ", app.satk);

  if (result) {
    localStorage.setItem("tokenIssuId", app.tokenIssuId);
    if (app.satk) {
      // router.replace("/homenumberList");
      router.replace({
        path: "/homenumberList",
        query: {
          tokenIssuId: app.tokenIssuId,
          encData: app.encData,
          sign: app.sign
        }
      });
    } else {
      router.replace({
        path: "/login",
        query: {
          tokenIssuId: app.tokenIssuId,
          encData: app.encData,
          sign: app.sign
        }
      });
    }

    // window.parent.postMessage(
    //   {
    //     msg: "SAFE_HNO_CLOSE",
    //     retUrl: app.retUrl,
    //     satk: app.satk,
    //     message: "암호화 토큰 유효성 검사"
    //   },
    //   app.retUrl
    // );
  }
};

onMounted(async () => {
  await tkn();
});
</script>

<template>
  <div></div>
</template>

<style lang="scss" scoped></style>
