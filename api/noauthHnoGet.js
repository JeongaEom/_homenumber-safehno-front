import { call } from "@/api";

const ahnoMyGet = ({
  hnoNo,
  scrtky,
  tokenIssuId,
  encData,
  sign
}) => {
  return call({
    id: "2.5 홈넘버 조회",
    endpoint: "/noauth/hno/get",
    data: {
      hnoNo,
      scrtky,
      tokenIssuId,
      encData,
      sign
    },
    onResponse({ code, data }) {
      // if (code === 2000) {
      //   return true;
      // } else {
      //   return false;
      // }
    },
  });
};

export default ahnoMyGet;
