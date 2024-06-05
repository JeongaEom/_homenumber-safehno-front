import { call } from "@/api";

const hnoGet = (hnoIssuNo) => {
  const get = useHnoGetStore();
  return call({
    id: "2.12 홈넘버 상세 조회 [V2]",
    endpoint: "/safehno/v2/hno/get",
    headers: "DEFAULT",
    data: {
      hnoIssuNo
    },
    onResponse({ code, data }) {
      get.$patch({
        hnoIssuNo: data.hnoIssuNo,
        hnoNo: data.hnoNo,
        nm: data.nm,
        moblphonNo: data.moblphonNo,
        postNo: data.postNo,
        bassAddr: data.bassAddr,
        detailAddr: data.detailAddr,
        addrNcm: data.addrNcm,
        issuDd: data.issuDd,
        issuTime: data.issuTime,
        goldnoYn: data.goldnoYn
      });
      return true;
    }
  });
};

export default hnoGet;
