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
    },'*'
  );
  window.close();
});
</script>

<template>
  <div></div>
</template>
