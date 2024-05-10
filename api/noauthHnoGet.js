import { call } from "@/api";

const noauthHnoGet = ({
  hnoNo,
  scrtky
}) => {
  return call({
    id: "2.5 홈넘버 조회",
    endpoint: "/safehno/v1/noauth/hno/get",
    headers: "PUBLIC",
    data: {
      hnoNo,
      scrtky
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

export default noauthHnoGet;
