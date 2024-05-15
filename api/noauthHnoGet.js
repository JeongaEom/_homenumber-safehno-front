import { call } from "@/api";

const noauthHnoGet = (hnoNo, scrtky, tokenIssuId, encData, sign) => {
  return call({
    id: "2.5 홈넘버 조회",
    endpoint: "/safehno/v1/noauth/hno/get",
    headers: "DEFAULT",
    data: {
      hnoNo,
      scrtky,
      tokenIssuId,
      encData,
      sign
    },
    onResponse({ code, data }) {
      console.log('비회원 홈넘버조회_code: ', code);
      console.log('비회원 홈넘버조회_data: ', data);
    },
  });
};

export default noauthHnoGet;
