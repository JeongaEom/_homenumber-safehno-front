import { call } from "@/api";

const noauthHnoGet = (hnoNo, scrtky, tokenIssuId, encData, sign) => {
  return call({
    id: "2.5 홈넘버 조회",
    endpoint: "/safehno/v1/noauth/hno/get",
    headers: "DEFAULT",
    withCredentials: true,
    data: {
      hnoNo,
      scrtky,
      tokenIssuId,
      encData,
      sign,
    },
    onResponse({ code, data }) {
      localStorage.setItem("hnoSearchType", "single");
      const shno = useSingleHnoStore();
      Object.assign(shno, data);
      return true;
    },
  });
};

export default noauthHnoGet;
