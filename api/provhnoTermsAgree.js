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
  const app = useAppStore();
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

      if (app.closeType == "1450001") {
        // iframe 일땐 window.parent | popup 일땐 window.opener 사용
        if (window.parent) {
          window.parent.postMessage(
            {
              msg: "SAFE_HNO_SUCCESS",
              tokenIssuId: data.tokenIssuId,
              encData: data.encData,
              sign: data.sign,
              satk: app.satk,
              retUrl: data.retUrl
            },
            data.retUrl
          );
        } else {
          console.warn("window.parent가 존재하지 않습니다.");
        }
      } else if (app.closeType == "1450002") {
        if (window.opener) {
          window.opener.postMessage(
            {
              msg: "SAFE_HNO_SUCCESS",
              tokenIssuId: data.tokenIssuId,
              encData: data.encData,
              sign: data.sign,
              satk: app.satk,
              retUrl: data.retUrl
            },
            data.retUrl
          );
          window.close();
        } else {
          console.warn("window.opener가 존재하지 않습니다.");
        }
      }

      console.log("app.closeType: ", app.closeType);
      return true;
    }
  });
};

export default provhnoTermsAgree;
