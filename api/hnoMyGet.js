import { call } from "@/api";

const hnoMyGet = (tokenIssuId, encData, sign) => {
  const myGetStore = useHnoMyGetStore();
  return call({
    id: "2.4 회원 홈넘버 조회 [V2]",
    endpoint: "/safehno/v2/hno/my/get",
    headers: "DEFAULT_TOKEN",
    data: {
      tokenIssuId,
      encData,
      sign
    },
    onResponse({ code, data }) {
      myGetStore.infoProvAuthNo = data.infoProvAuthNo;
      myGetStore.termsGrpCd = data.termsGrpCd;
      myGetStore.moblphonNo = data.moblphonNo;
      myGetStore.hnos = data.hnos.map((hno) => ({
        hnoIssuNo: hno.hnoIssuNo,
        hnoNo: hno.hnoNo,
        subCd: hno.subCd,
        nm: hno.nm,
        moblphonNo: hno.moblphonNo,
        postNo: hno.postNo,
        bassAddr: hno.bassAddr,
        detailAddr: hno.detailAddr,
        addrNcm: hno.addrNcm
      }));
      return true;
    }
  });
};

export default hnoMyGet;
