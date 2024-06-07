import { call } from "@/api";

const tknEncValid = (tokenIssuId, encData, sign) => {
  return call({
    id: "2.16 암호화 토큰 유효성 검사",
    endpoint: "/safehno/v2/tkn/enc/valid",
    headers: "DEFAULT",
    data: { tokenIssuId, encData, sign },
    onResponse({ code, data, message }) {
      return true;
    }
  });
};

export default tknEncValid;
