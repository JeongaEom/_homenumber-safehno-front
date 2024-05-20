import { call } from "@/api";

const hnoDupchk = (hnoNo) => {
  return call({
    id: "2.9 표준창 홈넘버 중복 검증",
    endpoint: "/safehno/v1/hno/dup/check",
    headers: "DEFAULT",
    withCredentials: true,
    data: {
      hnoNo
    },
    onResponse({ code }) {
      console.log("중복검증_code: ", code);
      return true;
    }
  });
};

export default hnoDupchk;
