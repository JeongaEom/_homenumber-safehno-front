import { call } from "@/api";
import qs from "qs";

const termsAgree = (
  hnoNo,
  subCd,
  infoProvAuthNo,
  termsCd,
  termsVer,
  isMyHnoYn
) => {
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
      // const targetUrl =
      //   import.meta.env.MODE === "development"
      //     ? "https://dev-safehno.homenumber.co.kr"
      //     : "http://localhost:3002";

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
    }
  });
};

export default termsAgree;
