import { call } from "@/api";

const tknEncValid = (tokenIssuId, encData, sign) => {
  // const router = useRouter();
  // const app = useAppStore();
  // if (app.isVerifing) {
  //   return app.verifingPromise;
  // }
  // app.isVerifing = true;
  // app.verifingResolve = null;
  // app.verifingPromise = new Promise((resolve) => {
  //   app.verifingResolve = resolve;
  // });
  return call({
    id: "2.16 암호화 토큰 유효성 검사",
    endpoint: "/safehno/v1/tkn/enc/valid",
    headers: "PUBLIC",
    withCredentials: true,
    data: {
      tokenIssuId,
      encData,
      sign
    },
    // onFinally() {
    //   app.verifingResolve(true);
    //   app.isVerifing = false;
    //   console.log('app.isVerifing: ', app.isVerifing);
    //   console.log(' app.verifingResolv: ',  app.verifingResolve);
    // },
    onResponse({ data, code, message }) {
      console.log('유효성_code: ', code);
      if (code === 2000) {
        // router.push('/login');
        return true;
      } else {
        return false;
      }
    },
  });
};

export default tknEncValid;
