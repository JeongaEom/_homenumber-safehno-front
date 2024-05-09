import { call } from "@/api";

const sessionValid = () => {
  return call({
    id: "2.17 표준창 서비스 세션 검사",
    endpoint: "/session/valid",
    data: {},
    onResponse({ code, data }) {
      console.log('서비스 세션 검사: ', code);
      if (code === 2000) {
        return true;
      } else {
        return false;
      }
    },
  });
};

export default sessionValid;
