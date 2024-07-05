import { call } from "@/api";

const kakaoLogin = (kakaoAuthCd) => {
  const app = useAppStore();
  return call({
    id: "2.24 카카오 로그인 [V2]",
    endpoint: "/safehno/v2/kakao/login",
    headers: "DEFAULT",
    data: { kakaoAuthCd },
    onResponse({ code, data, message }) {
      console.log("data: ", data);

      app.satk = data.satk; // 인증토큰
      console.log("_app.satk: ", app.satk);

      localStorage.setItem("hnoSearchType", "multi");
      return true;
    }
  });
};

export default kakaoLogin;
