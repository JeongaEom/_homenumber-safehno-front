import { call } from "@/api";

const tknEncValid = (tokenIssuId) => {
  const app = useAppStore();
  return call({
    id: "2.16 암호화 토큰 유효성 검사",
    endpoint: "/tkn/enc/valid",
    headers: "PUBLIC",
    data: {
      tokenIssuId
    },
    onError() {
      uLogout();
      alert("유효성 검증에 실패하였습니다. 다시 시도해주세요.");
      return false;
    },
    onResponse({ code, data }) {
      if (data.tokenIssuId !== tokenIssuId) {
        uLogout();
        alert("유효성 검증에 실패하였습니다. 다시 시도해주세요.");
        return false;
      } else {
        app.isLoggedIn = true;
        return true;
      }
    },
  });
};

export default tknEncValid;