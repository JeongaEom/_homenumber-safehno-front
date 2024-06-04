import { call } from "@/api";

const termsAgree = (
  hnoNo,
  subCd,
  infoProvAuthNo,
  termsCd,
  termsVer,
  isMyHnoYn
) => {
  const termsStore = useTermsStore();
  return call({
    id: "2.6 홈넘버 정보 제공 동의",
    endpoint: "/safehno/v1/provhno/terms/agree",
    headers: "DEFAULT",
    withCredentials: true,
    data: {
      hnoNo,
      subCd,
      infoProvAuthNo,
      termsCd,
      termsVer,
      isMyHnoYn
    },
    onResponse({ code, data }) {
      window.opener.postMessage(
        {
          msg: "SAFE_HNO_SUCCESS",
          tokenIssuId: data.tokenIssuId,
          encData: data.encData,
          sign: data.sign,
          retUrl: data.retUrl
        },
        data.retUrl
      );
      window.close();

      termsStore.$patch({
        tokenIssuId: data.tokenIssuId,
        encData: data.encData,
        sign: data.sign
      });

      // console.log("data.tokenIssuId: ", data.tokenIssuId);
      // console.log("termsStore: ", termsStore);
      // console.log("termsStore.tokenIssuId: ", termsStore.tokenIssuId);
    }
  });
};

export default termsAgree;
