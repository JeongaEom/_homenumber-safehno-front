import { call } from "@/api";

const tknEncValid = (tokenIssuId, encData, sign, satk) => {
  const app = useAppStore();
  const data = { tokenIssuId, encData, sign };

  // satk 값이 있을 경우 data 객체에 추가
  if (satk) {
    data.satk = satk;
  }

  return call({
    id: "2.16 암호화 토큰 유효성 검사 [V2]",
    endpoint: "/safehno/v2/tkn/enc/valid",
    headers: "DEFAULT",
    data,
    // data: { tokenIssuId, encData, sign, satk },
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
