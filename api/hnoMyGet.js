import { call } from "@/api";
import { usehnoMyGetStore } from '@/stores'

const hnoMyGet = () => {
  const myGetStore = usehnoMyGetStore();
  return call({
    id: "2.4 회원 홈넘버 조회",
    endpoint: "/hno/my/get",
    withCredentials: true,
    data: {},
    onResponse({ code, data }) {
      myGetStore.infoProvAuthNo = data.infoProvAuthNo,
      myGetStore.termsGrpCd = data.termsGrpCd,
      myGetStore.hnos = data.hnos.map(hno => ({
        hnoNo: hno.hnoNo,
        subCd: hno.subCd,
        nm: hno.nm,
        moblphonNo: hno.moblphonNo,
        postNo: hno.postNo,
        bassAddr: hno.bassAddr,
        detailAddr: hno.detailAddr,
        addrNcm: hno.addrNcm
      }));

      console.log('myGet.infoProvAuthNo!: ', myGetStore.infoProvAuthNo);
      console.log('myGet.termsGrpCd!: ', myGetStore.termsGrpCd);
      console.log('myGet.hnos!: ', myGetStore.hnos);

      return true;
    },
  });
};

export default hnoMyGet;
