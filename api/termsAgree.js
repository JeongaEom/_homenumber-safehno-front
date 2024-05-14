import { call } from "@/api";

const termsAgree = (
  hnoNo,
  subCd,
  infoProvAuthNo,
  termsCd,
  termsVer,
  isMyHnoYn
) => {
  return call({
    id: "2.6 홈넘버 정보 제공 동의",
    endpoint: "/safehno/web/provhno/terms/agree",
    headers: "DEFAULT_FORM",
    withCredentials: true,
    data: {
      hnoNo,
      subCd,
      infoProvAuthNo,
      termsCd,
      termsVer,
      isMyHnoYn
    },
    onResponse({ code, data }) {
      console.log('로그인_code: ', code);
      console.log('로그인_data: ', data);
      if (code === 2000) {
        window.close();
        return true;
      } else {
        return false;
      }
    },
  });
};

export default termsAgree;
