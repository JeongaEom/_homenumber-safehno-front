import { call } from "@/api";

const closeTypeGet = () => {
  const app = useAppStore();
  return call({
    id: "2.26 표준창 닫기 유형 조회 [V2]",
    endpoint: "/safehno/v2/app/close/type/get",
    headers: "DEFAULT",
    data: {},
    onResponse({ code, data }) {
      console.log("data: ", data);
      app.closeType = data.stdpTyCd;
      console.log("closeType_: ", app.closeType);
      return true;
    }
  });
};

export default closeTypeGet;
