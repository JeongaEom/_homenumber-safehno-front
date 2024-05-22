import { call } from "@/api";

const certiPhoneReadyGet = (deviceTyCd) => {
  const auth = useAuthStore();
  return call({
    id: "2.19 휴대폰 본인확인 사전조회",
    endpoint: "/safehno/v1/certi/phone/ready/get",
    headers: "DEFAULT",
    withCredentials: true,
    data: {
      deviceTyCd: "1070001"
    },
    onResponse({ code, data }) {
      auth.nid.encData = data.encData;
      auth.nid.checkPlusUrl = data.checkPlusUrl;
      console.log("휴대폰 사전_data: ", data);
      // console.log("auth.nid.checkPlusUrl: ", auth.nid.checkPlusUrl);
      return true;
    }
  });
};

export default certiPhoneReadyGet;
