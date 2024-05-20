import { call } from "@/api";

const hnoUpdate = ({
  hnoIssuNo,
  nm,
  moblphonNo,
  postNo,
  bassAddr,
  detailAddr,
  scrtky,
  addrNcm
}) => {
  return call({
    id: "2.13 홈넘버 정보 수정",
    endpoint: "/safehno/v1/hno/update",
    headers: "DEFAULT",
    withCredentials: true,
    data: {
      hnoIssuNo,
      nm,
      moblphonNo,
      postNo,
      bassAddr,
      detailAddr,
      scrtky,
      addrNcm
    },
    onResponse({ code, data }) {
      return true;
    }
  });
};

export default hnoUpdate;
