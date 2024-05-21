<script setup>
import { onMounted } from "vue";
import { useAuthStore } from "@/store";

const auth = useAuthStore();

onMounted(() => {
  callNiceID();
});

const callNiceID = () => {
  document.form_chk.action = auth.nid.checkPlusUrl;
  document.form_chk.submit();
};
</script>

<template>
  <form name="form_chk" method="post">
    <input type="hidden" name="m" value="checkplusService" />
    <input type="hidden" name="recvMethodType" value="get" />
    <input type="hidden" name="EncodeData" :value="auth.nid.encData" />
  </form>
</template>
