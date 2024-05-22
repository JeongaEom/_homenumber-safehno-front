<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";

definePageMeta({
  name: "nid-success"
});

const FE_DOMAIN =
  process.env.NODE_ENV === "development"
    ? `http://localhost:3002`
    : `https://dev-safehno.homenumber.co.kr/`;

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
