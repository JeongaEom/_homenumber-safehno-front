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
    id: "2.8 표준창 홈넘버 발급 [V2]",
    endpoint: "/safehno/v2/hno/iss/do",
    headers: "DEFAULT_TOKEN",
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
