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
    method: "get",
    endpoint:
      "/safehno/web/provhno/terms/agree?" +
      qs.stringify({
        hnoNo,
        subCd,
        infoProvAuthNo,
        termsCd,
        termsVer,
        isMyHnoYn
      }),
    headers: "DEFAULT_FORM",
    withCredentials: true,
    onResponse({ code, data }) {
      console.log("3자_code: ", code);
      console.log("3자_data: ", data);
    }
  });
};

export default termsAgree;
