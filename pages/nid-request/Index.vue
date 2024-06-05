<script setup>
import { onMounted } from "vue";
import { certiPhoneReadyGet } from "@/api";

const auth = useAuthStore();

definePageMeta({
  layout: "default-none",
  name: "nid-request"
});

const certiPh = async () => {
  await certiPhoneReadyGet();
};

const callNiceID = () => {
  document.form_chk.action = auth.nid.checkPlusUrl;
  document.form_chk.submit();
};

onMounted(async () => {
  await certiPh();
  await callNiceID();
});
</script>

<template>
  <form name="form_chk" method="post">
    <input type="hidden" name="m" value="checkplusService" />
    <input type="hidden" name="recvMethodType" value="get" />
    <input type="hidden" name="EncodeData" :value="auth.nid.encData" />
  </form>
</template>
