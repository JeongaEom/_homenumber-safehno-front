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
    id: "2.13 홈넘버 정보 수정 [V2]",
    endpoint: "/safehno/v2/hno/update",
    headers: "DEFAULT_TOKEN",
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
    onResponse({ code, message }) {
      console.log("message: ", message);
      return true;
    }
  });
};

export default hnoUpdate;
