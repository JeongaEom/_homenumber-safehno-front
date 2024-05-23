import { call } from "@/api";

const hnoIssDo = ({
  hnoNo,
  nm,
  moblphonNo,
  postNo,
  bassAddr,
  detailAddr,
  scrtky,
  addrNcm
}) => {
  return call({
    id: "2.8 표준창 홈넘버 발급",
    endpoint: "/safehno/v1/hno/iss/do",
    headers: "DEFAULT",
    withCredentials: true,
    data: {
      hnoNo,
      nm,
      moblphonNo,
      postNo,
      bassAddr,
      detailAddr,
      scrtky,
      addrNcm
    },
    onResponse({ code }) {
      return true;
    }
  });
};

export default hnoIssDo;
