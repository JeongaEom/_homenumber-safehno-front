import { call } from "@/api";

const tknEncValid = (tokenIssuId, encData, sign ) => {
  return call({
    id: "2.16 암호화 토큰 유효성 검사",
    endpoint: "/tkn/enc/valid",
    data: {
      tokenIssuId,
      encData,
      sign
    },
    onResponse({ data, code, message }) {
      // if (code === 2000) {
      //   router.push('/login');
      //   return true;
      // } else {
      //   return false;
      // }
      // return [ data, code, message ];
    },
  });
};

export default tknEncValid;