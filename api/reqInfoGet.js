import { call } from "@/api";

const reqInfoGet = (tokenIssuId) => {
  const auth = useAuthStore();
  return call({
    id: "2.20 표준창 요청 정보 조회",
    endpoint: "/safehno/v2/req/info/get",
    headers: "DEFAULT",
    data: { tokenIssuId },
    onResponse({ code, data, message }) {
      console.log("data_표준창 요청 정보 조회: ", data);
      console.log("message_표준창 요청 정보 조회: ", message);
      auth.$patch({
        tokenIssuId: data.tokenIssuId,
        encData: data.encData,
        sign: data.sign
      });
      return true;
    }
  });
};

export default reqInfoGet;
