import { call } from "@/api";

const mberSignup = (mberId, pwd, email, encData) => {
  const app = useAppStore();
  const auth = useAuthStore();
  const termsAgre = auth.signupTems.map((term) => {
    return {
      termsCd: term.termsCd,
      termsVer: term.termsVer,
      agreYn: "Y"
    };
  });
  return call({
    id: "2.10 표준 창 회원가입",
    endpoint: "/safehno/v1/mber/signup",
    headers: "DEFAULT",
    withCredentials: true,
    data: {
      mberId,
      pwd,
      email,
      encData,
      termsAgre
    },
    onResponse({ code, data }) {
      app.isLoggedIn = true;
      return true;
    }
  });
};

export default mberSignup;
