import { call } from "@/api";

const smsCertiConfirm = (moblphonNo, crtfcTkn, crtfcNo) => {
  return call({
    id: "2.15 휴대폰 인증번호 확인",
    endpoint: "/safehno/v1/sms/certi/confirm",
    headers: "DEFAULT",
    data: {
      moblphonNo,
      crtfcTkn,
      crtfcNo
    },
    onResponse({ code, data }) {
      return true;
    }
  });
};

export default smsCertiConfirm;
