import { call } from "@/api";

const smsCertiReq = (moblphonNo) => {
  const app = useAppStore();
  return call({
    id: "2.14 휴대폰 인증번호 요청",
    endpoint: "/safehno/v1/sms/certi/req",
    headers: "DEFAULT",
    withCredentials: true,
    data: {
      moblphonNo
    },
    onResponse({ code, data }) {
      app.crtfcTkn = data.crtfcTkn;
      return true;
    }
  });
};

export default smsCertiReq;
