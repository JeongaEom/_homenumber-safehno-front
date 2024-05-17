import { call } from "@/api";

const authSignin = (hnoNo) => {
  return call({
    id: "2.9 표준창 홈넘버 중복 검증",
    endpoint: "/safehno/v1/hno/dupchk",
    headers: "DEFAULT",
    withCredentials: true,
    data: {
      hnoNo
    },
    onResponse({ code }) {
      console.log("발급_code: ", code);
      return true;
    }
  });
};

export default authSignin;
