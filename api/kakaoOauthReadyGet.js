import { call } from "@/api";

const kakaoOauthReadyGet = () => {
  const auth = useAuthStore();
  return call({
    id: "2.23 카카오 로그인 사전조회 [V2]",
    endpoint: "/safehno/v2/kakao/oauth/ready/get",
    headers: "DEFAULT",
    data: {},
    onResponse({ code, data, message }) {
      console.log("data: ", data);

      auth.kakaoOauthUrl = data.kakaoOauthUrl;
      console.log("data.kakaoOauthUrl: ", data.kakaoOauthUrl);

      return true;
    }
  });
};

export default kakaoOauthReadyGet;
