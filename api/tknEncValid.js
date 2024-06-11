import { call } from "@/api";

const tknEncValid = (tokenIssuId, encData, sign) => {
  const app = useAppStore();
  return call({
    id: "2.16 암호화 토큰 유효성 검사",
    endpoint: "/safehno/v2/tkn/enc/valid",
    headers: "DEFAULT",
    data: { tokenIssuId, encData, sign },
    onResponse({ code, data, message }) {
      console.log("data: ", data);
      //1450001 아이프레임 iframe | 140002 팝업 popup
      app.closeType = data.stdpTypeCd;
      app.retUrl = data.retUrl;
      console.log("app.closeType: ", app.closeType);
      console.log("app.retUrl: ", app.retUrl);
      return true;
    }
  });
};

export default tknEncValid;
