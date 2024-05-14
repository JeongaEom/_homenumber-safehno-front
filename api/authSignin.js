import { call } from "@/api";

const authSignin = (id, pwd, tokenIssuId, encData, sign) => {
  return call({
    id: "2.3 표준창 로그인",
    endpoint: "/safehno/v1/auth/signin",
    headers: "DEFAULT",
    withCredentials: true,
    data: {
      id,
      pwd,
      tokenIssuId,
      encData,
      sign
    },
    onResponse({ code, message }) {
      console.log('로그인_code: ', code);
      // alert(message);
      if (code === 2000) {
        return true;
      } else {
        return false;
      }
    },
  });
};

export default authSignin;
