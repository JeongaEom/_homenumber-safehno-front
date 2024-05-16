<script setup>
onMounted(() => {
  window.opener.postMessage(
    {
      msg: "SAFE_HNO_SUCCESS",
      tokenIssuId: "TOKENISSUID",
      encTknIssuId: "ENCTKNISSUID",
      endData: "ENDDATA",
      sign: "SIGN",
      retUrl: "https://www.naver.com"
    },
    "http://localhost:3002"
  );
  window.close();
});
</script>

<template>
  <div></div>
</template>
