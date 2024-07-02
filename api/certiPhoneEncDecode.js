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
      auth.birthDate = data.birthDate;
      auth.gender = data.gender;
      auth.mobileNo = data.mobileNo;

      console.log("auth.name: ", auth.name);
      console.log("auth.birthDate: ", auth.birthDate);
      console.log("auth.gender: ", auth.gender);
      console.log("auth.mobileNo: ", auth.mobileNo);
      return true;
    }
  });
};

export default certiPhoneEncDecode;
