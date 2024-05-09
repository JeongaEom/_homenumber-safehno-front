import { call } from "@/api";

const authSignin = (id, pwd) => {
  return call({
    id: "2.3 표준창 로그인",
    endpoint: "/safehno/v1/auth/signin",
    withCredentials: true,
    data: {
      id,
      pwd
    },
    onResponse({ code, data }) {
      if (code === 2000) {
        // document.cookie = `auth=${data.acsTkn}; Secure; HttpOnly`;
        return true;
      } else {
        return false;
      }
    },
  });
};

export default authSignin;
