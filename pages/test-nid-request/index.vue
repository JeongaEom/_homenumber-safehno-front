<script setup>
import { onMounted } from "vue";
import { certiPhoneReadyGet } from "@/api";

const auth = useAuthStore();

definePageMeta({
  layout: "default-none",
  name: "test-nid-request"
});

const certiPh = async () => {
  await certiPhoneReadyGet();
};

// const callNiceID = () => {
//   document.form_chk.action = auth.nid.checkPlusUrl;
//   document.form_chk.submit();
// };

onMounted(async () => {
  await certiPh();
  // await callNiceID();
  console.log("certiPh: ", certiPh());
  console.log("auth.nid.checkPlusUrl: ", auth.nid.checkPlusUrl);
  console.log("auth.nid.encData: ", auth.nid.encData);
});
</script>

<template>
  <!-- <form name="form_chk" method="post">
    <input type="hidden" name="m" value="checkplusService" />
    <input type="hidden" name="recvMethodType" value="get" />
    <input type="hidden" name="EncodeData" :value="auth.nid.encData" />
  </form> -->
</template>
