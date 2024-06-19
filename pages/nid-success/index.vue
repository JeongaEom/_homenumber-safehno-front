<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";

definePageMeta({
  layout: "default-none",
  name: "nid-success"
});

// const FE_DOMAIN =
//   process.env.NODE_ENV === "development"
//     ? `http://localhost:3002`
//     : `https://dev-safehno.homenumber.co.kr/`;

let FE_DOMAIN;

if (import.meta.env.MODE === "development") {
  FE_DOMAIN = "https://dev-safehno.homenumber.co.kr/";
} else if (import.meta.env.MODE === "production") {
  FE_DOMAIN = "https://safehno.homenumber.co.kr";
} else {
  FE_DOMAIN = "http://localhost:3002";
}

console.log("FE_DOMAIN: ", FE_DOMAIN);

onMounted(() => {
  const r = useRoute();

  if (window.opener) {
    window.opener.postMessage(
      {
        msg: "AUTH_COMPLETE",
        EncodeData: r.query.EncodeData
      },
      FE_DOMAIN
    );
    window.close();
  } else {
    console.warn("window.opener가 존재하지 않습니다.");
  }
});
</script>

<template>
  <div></div>
</template>
