import { call } from "@/api";

const mberIdcheck = (mberId) => {
  const app = useAppStore();
  return call({
    id: "2.11 사용자 아이디 중복 체크 ",
    endpoint: "/safehno/v1/mber/idcheck",
    headers: "DEFAULT",
    withCredentials: true,
    data: {
      mberId
    },
    onResponse({ code, data, message }) {
      app.error = {
        type: "alert",
        message: message,
        hasClose: false
      };
      return true;
    }
  });
};

export default mberIdcheck;
