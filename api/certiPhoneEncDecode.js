import { call } from "@/api";

const certiPhoneEncDecode = (encData) => {
  const auth = useAuthStore();
  return call({
    id: "2.25 휴대폰인증 복호화",
    endpoint: "/safehno/v1/certi/phone/enc/decode",
    headers: "DEFAULT",
    data: { encData },
    onResponse({ code, data, message }) {
      console.log("data: ", data);

      auth.name = data.name;
      auth.birthData = data.birthData;
      auth.gender = data.gender === 0 ? "여성" : "남성";
      auth.mobileNo = data.mobileNo;

      console.log("auth.name: ", auth.name);
      console.log("auth.gender: ", auth.gender);
      return true;
    }
  });
};

export default certiPhoneEncDecode;
