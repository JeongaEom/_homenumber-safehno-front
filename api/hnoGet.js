import { call } from "@/api";

const hnoGet = (hnoIssuNo) => {
  const get = useHnoGetStore();
  return call({
    id: "2.12 홈넘버 상세 조회",
    endpoint: "/safehno/v1/hno/get",
    headers: "DEFAULT",
    withCredentials: true,
    data: {
      hnoIssuNo
    },
    onResponse({ code, data }) {
      console.log("상세조회_code: ", code);
      console.log("상세조회_data: ", data);
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
