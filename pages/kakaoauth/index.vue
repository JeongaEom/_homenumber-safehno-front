<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { kakaoLogin } from "@/api";

const route = useRoute();
// const router = useRouter();
// const app = useAppStore();

definePageMeta({
  layout: "default-none",
  name: "kakaoAuth"
});

const isMember = async () => {
  const code = route.query.code;

  if (code) {
    console.log(code);
    await kakaoLogin(code);
  } else {
    // app.error = {
    //   type: "alert",
    //   message: "카카오 인증 오류가 발생하였습니다.",
    //   onConfirm: () => {
    //     router.replace({
    //       path: "/"
    //     });
    //   }
    // };
  }

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
  return true;
};

onMounted(async () => {
  isMember();
  // console.log("route.query.sign: ", route.query.sign);
});
</script>

<template></template>

<style lang="scss" scoped></style>
