import { call } from "@/api";

const certiPhoneReadyGet = () => {
  const auth = useAuthStore();
  return call({
    id: "2.19 휴대폰 본인확인 사전조회",
    endpoint: "/safehno/v1/certi/phone/ready/get",
    headers: "DEFAULT",
    data: {
      deviceTyCd: "1070001"
    },
    onResponse({ code, data }) {
      auth.nid.encData = data.encData;
      auth.nid.checkPlusUrl = data.checkPlusUrl;

      console.log("data.encData: ", data.encData);
      console.log("data.checkPlusUrl: ", data.checkPlusUrl);
      return true;
    }
  });
};

export default certiPhoneReadyGet;
