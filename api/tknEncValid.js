import { call } from "@/api";

const tknEncValid = (tokenIssuId, encData, sign) => {
  // const app = useAppStore();
  return call({
    id: "2.16 암호화 토큰 유효성 검사",
    endpoint: "/safehno/v1/tkn/enc/valid",
    withCredentials: true,
    data: {
      tokenIssuId,
      encData,
      sign
    },
    onResponse({ data, code, message }) {
      console.log('유효성_code: ', code);
      if (code === 2000) {
        // app.login = true;
        return true;
      } else {
        return false;
      }
    },
  });
};

export default tknEncValid;
