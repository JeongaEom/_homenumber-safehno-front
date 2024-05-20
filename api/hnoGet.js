import { call } from "@/api";

const hnoGe = (hnoIssuNo) => {
  const myGetStore = useHnoMyGetStore();
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
      myGetStore.hnosDeteil = data.hnosDeteil.map((hnosDeteil) => ({
        hnoIssuNo: hnosDeteil.hnoIssuNo,
        hnoNo: hnosDeteil.hnoNo,
        nm: hnosDeteil.nm,
        moblphonNo: hnosDeteil.moblphonNo,
        postNo: hnosDeteil.postNo,
        bassAddr: hnosDeteil.bassAddr,
        detailAddr: hnosDeteil.detailAddr,
        addrNcm: hnosDeteil.addrNcm,
        issuDd: hnosDeteil.issuDd,
        issuTime: hnosDeteil.issuTime,
        goldnoYn: hnosDeteil.goldnoYn
      }));
      console.log("myGetStore.hnosDeteil!: ", myGetStore.hnosDeteil);
      return true;
    }
  });
};

export default hnoGe;
