<script setup>
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { kakaoLogin, reqInfoGet } from "@/api";

const route = useRoute();
const router = useRouter();
const app = useAppStore();
const auth = useAuthStore();

definePageMeta({
  layout: "default-none",
  name: "kakaoAuth"
});

const isMember = async () => {
  try {
    const code = route.query.code;
    console.log("code_카카오: ", code);

    const token = localStorage.getItem("tokenIssuId");
    console.log("token: ", token);

    if (!token) {
      throw new Error("토큰이 존재하지 않습니다.");
    }

    const enc = await reqInfoGet(token);
    console.log("reqInfoGet_표준창 요청 정보 조회_카카오: ", enc);

    console.log("auth.tokenIssuId_카카오111: ", auth.tokenIssuId);

    app.tokenIssuId = auth.tokenIssuId;
    app.encData = auth.encData;
    app.sign = auth.sign;

    if (code) {
      const result = await kakaoLogin(code);
      console.log("result_카카오: ", result);

      if (result) {
        router.replace("/homenumberList");
      }

      console.log("app.tokenIssuId_카카오: ", app.tokenIssuId);
      console.log("app.encData_카카오: ", app.encData);
      console.log("app.sign_카카오: ", app.sign);
      console.log("result?: ", result);
    } else {
      throw new Error("code가 존재하지 않습니다.");
    }
  } catch (error) {
    app.error = {
      type: "page",
      message: error.response?.data?.message,
      onConfirm: () => {
        router.replace({
          path: "/"
        });
      }
    };
    router.replace("/error");
  }
  return true;
};

onMounted(() => {
  isMember();
});
</script>

<template></template>

<style lang="scss" scoped></style>
