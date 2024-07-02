import { call } from "@/api";

const authSignin = (id, pwd, tokenIssuId) => {
  const app = useAppStore();
  return call({
    id: "2.3 표준창 로그인 [V2]",
    endpoint: "/safehno/v2/auth/signin",
    headers: "DEFAULT",
    data: {
      id,
      pwd,
      tokenIssuId
    },
    onResponse({ code, data }) {
      app.satk = data.satk; // 인증토큰
      console.log("app.satk_로그인api: ", app.satk);

      localStorage.setItem("hnoSearchType", "multi");
      return true;
    }
  });
};

export default authSignin;
