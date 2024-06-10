import { call } from "@/api";

const provhnoTermsAgree = (
  tokenIssuId,
  encData,
  sign,
  hnoNo,
  subCd,
  infoProvAuthNo,
  termsCd,
  termsVer,
  isMyHnoYn
) => {
  const termsStore = useTermsStore();

  // 조회 타입
  const hnoSearchType = localStorage.getItem("hnoSearchType");
  return call({
    id: "2.6 홈넘버 정보 제공 동의 [V2]",
    endpoint: "/safehno/v2/provhno/terms/agree",
    headers: hnoSearchType === "multi" ? "DEFAULT_TOKEN" : "DEFAULT", // multi : 마이 홈넘버 조회,  single: 홈넘버 조회
    data: {
      tokenIssuId,
      encData,
      sign,
      hnoNo,
      subCd,
      infoProvAuthNo,
      termsCd,
      termsVer,
      isMyHnoYn
    },
    onResponse({ code, data }) {
      termsStore.$patch({
        tokenIssuId: data.tokenIssuId,
        encData: data.encData,
        sign: data.sign
      });

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
      // window.close();

      // console.log("data.tokenIssuId: ", data.tokenIssuId);
      // console.log("termsStore: ", termsStore);
      // console.log("termsStore.tokenIssuId: ", termsStore.tokenIssuId);
      return true;
    }
  });
};

export default provhnoTermsAgree;
