import { call } from "@/api";

const hnoDupchk = (hnoNo) => {
  const app = useAppStore();
  return call({
    id: "2.9 표준창 홈넘버 중복 검증",
    endpoint: "/safehno/v1/hno/dup/check",
    headers: "DEFAULT",
    data: {
      hnoNo
    },
    onResponse({ code, message }) {
      app.error = {
        type: "alert",
        message: message,
        hasClose: false
      };
      return true;
    }
  });
};

export default hnoDupchk;
