import { call } from "@/api";

const authSignin = ({ id, pwd, tokenIssuId, encData, sign }) => {
  return call({
    id: "2.3 표준창 로그인",
    endpoint: "/auth/signin",
    withCredentials: true,
    data: {
      id,
      pwd,
      tokenIssuId,
      encData,
      sign
    },
    onResponse({ code, data }) {
      if (code === 2000) {
        // app.isLoggedIn = true;
        return true;
      } else {
        return false;
      }
    },
  });
};

export default authSignin;
