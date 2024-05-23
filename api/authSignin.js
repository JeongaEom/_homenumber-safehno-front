import { call } from "@/api";

const authSignin = (id, pwd, tokenIssuId, encData, sign) => {
  const router = useRouter();
  const app = useAppStore();
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
    onResponse({ code }) {
      localStorage.setItem("hnoSearchType", "multi");
      router.replace("/homenumberList");
      return true;
    }
  });
};

export default authSignin;
