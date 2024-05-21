import { call } from "@/api";

const userSignup = ({ mberId, pwd, email, encData }) => {
  const termsAgre = auth.signupTems.map((term) => {
    return {
      termsCd: term.termsCd,
      termsVer: term.termsVer,
      agreYn: "Y"
    };
  });
  return call({
    id: "2.10 표준 창 회원가입",
    endpoint: "/safehno/v1/user/signup",
    headers: "DEFAULT",
    withCredentials: true,
    data: {
      hmberId,
      pwd,
      email,
      encData,
      termsAgre
    },
    onResponse({ code, data }) {
      return true;
    }
  });
};

export default userSignup;
