import axios from "axios";
import { useAppStore } from "@/stores/app";

export { default as authSignin } from "./authSignin";
export { default as hnoMyGet } from "./hnoMyGet";
export { default as noauthHnoGet } from "./noauthHnoGet";
export { default as provhnoTermsAgree } from "./provhnoTermsAgree";
export { default as termsList } from "./termsList";
export { default as hnoIssDo } from "./hnoIssDo";
export { default as hnoDupchk } from "./hnoDupchk";
export { default as smsCertiReq } from "./smsCertiReq";
export { default as smsCertiConfirm } from "./smsCertiConfirm";
export { default as hnoGet } from "./hnoGet";
export { default as hnoUpdate } from "./hnoUpdate";
export { default as mberSignup } from "./mberSignup";
export { default as mberIdcheck } from "./mberIdcheck";
export { default as certiPhoneReadyGet } from "./certiPhoneReadyGet";
export { default as tknEncValid } from "./tknEncValid";
export { default as reqInfoGet } from "./reqInfoGet";
export { default as kakaoOauthReadyGet } from "./kakaoOauthReadyGet";
export { default as kakaoLogin } from "./kakaoLogin";
export { default as certiPhoneEncDecode } from "./certiPhoneEncDecode";
export { default as closeTypeGet } from "./closeTypeGet";

// const API_HOST = "https://dev-hno-api.homenumber.co.kr";

let API_HOST;
if (import.meta.env.MODE === "production") {
  API_HOST = "https://hno-api.homenumber.co.kr";
} else if (import.meta.env.MODE === "development") {
  API_HOST = "https://dev-hno-api.homenumber.co.kr";
} else if (import.meta.env.MODE === "local") {
  API_HOST = "/api";
}

console.log("API 호스트:", API_HOST);

if (import.meta.env.MODE === "local") {
  console.log("api_로컬 환경입니다.");
} else if (import.meta.env.MODE === "development") {
  console.log("api_개발 환경입니다.");
} else if (import.meta.env.MODE === "production") {
  console.log("api_운영 환경입니다.");
}

console.log("import.meta.env.MODE: ", import.meta.env.MODE);

const API_DEBUG = true;

export const commonHeaders = () => {
  return {
    "Content-Type": "application/json;charset=UTF-8",
    appId: "SAFEHNO",
    apikey:
      import.meta.env.MODE === "production"
        ? "7b5153d7-10ea-4555-8f09-7183970944b4"
        : "609af5e1-0047-49a5-93eb-c3a1db30fb92"
  };
};

export const getPresetHeaders = (headers = {}) => {
  const app = useAppStore();
  const baseHeaders = commonHeaders(); // commonHeaders 함수 호출
  if (typeof headers === "string") {
    // headers가 문자열인 경우
    const base = {
      "Content-Type": baseHeaders["Content-Type"],
      appId: baseHeaders["appId"],
      apikey: baseHeaders["apikey"]
    };

    switch (headers) {
      case "DEFAULT":
        return {
          ...base
        };
      case "DEFAULT_TOKEN":
        return {
          ...base,
          satk: app.satk // 인증토큰
        };
      case "DEFAULT_FORM":
        return {
          ...base,
          "Content-Type": "application/x-www-form-urlencoded"
        };
      case "PUBLIC":
        return base;
      default:
        return base; // 기본값
    }
  } else {
    // headers가 객체인 경우
    return {
      ...baseHeaders,
      ...headers
    };
  }
};

const defaultErrorProc = (error) => {
  // 에러창 설정
  const app = useAppStore();
  const code = error.response?.data?.code;
  if (code === 4021) {
    // 페이지 표시 에러
    app.error = {
      type: "page", // pages > error > index.vue 페이지로 사용시
      message: error.response?.data?.message
    };
    const router = useRouter();
    router.replace("/error");
  } else if (code === 4017 || code === 4019) {
    const router = useRouter();
    router.replace({
      path: "/login",
      query: {
        tokenIssuId: app.tokenIssuId,
        encData: app.encData,
        sign: app.sign
      }
    });
  } else {
    // 팝업창 에러
    app.error = {
      type: "alert", // components > popup.vue 사용시
      message: error.response?.data?.message
    };
  }
  return false;

  // const app = useAppStore();
  // app.error = {
  //   message: error.response?.data?.message,
  // };
  // const router = useRouter();
  // router.replace("/error");
  // return false;

  // const app = useAppStore();
  // console.log(error);
  // console.log("app.isRouting - ", app.isRouting);

  // uAddError(0, () => {
  //   alert(error.response.data.message);
  // });

  // return false;
};

export const call = async (settings) => {
  const {
    id,
    endpoint,
    method,
    headers,
    // withCredentials,
    beforeRequest,
    data = {},
    onResponse,
    onError
    // onFinally
  } = settings;

  // 선행 조건 확인
  if (beforeRequest) {
    // 비동기 작업이 필요하면 기다리고
    const validRequest = await beforeRequest();
    // 선행 조건을 통과하지 못하면 return
    if (validRequest === false) {
      API_DEBUG && console.log("🟡 요청 취소:", id);
      return false;
    }
  }

  // null값을 가지는 프로퍼티 삭제
  Object.keys(data).forEach((key) => {
    if (data[key] === null) delete data[key];
  });
  // 호출
  // 타겟 URL 설정
  // endpoint로 호출하는 경우(미리 정의된 HOST를 붙인다)
  // url로 호출하는 경우는 그대로 호출
  const api = axios({
    method: method || "post",
    url: API_HOST + endpoint,
    headers: getPresetHeaders(headers),
    data
  })
    .then((res) => {
      const { data, config } = res;
      API_DEBUG && console.log(`🟢 API - ${config.url}\n`);
      API_DEBUG && console.log(id);
      const resultData = JSON.stringify(data, null, 2);
      API_DEBUG && console.log(resultData);

      return onResponse({
        code: data.code,
        data: data.data,
        message: data.message
      });
    })

    .catch(async (error) => {
      const code = error.response?.data?.code;
      const message = error.response?.data?.message;

      console.log("error: ", error);
      console.log("code: ", code);
      console.log("message: ", message);

      API_DEBUG &&
        console.log(
          `🔴 API ${id}, ${code}, ${message}\n`,
          error.response?.data
        );

      const router = useRouter();

      // 접근 불가 권한
      if (code === 4013) {
        const app = useAppStore();
        app.error = {
          type: "alert",
          message: error.response?.data?.message
        };
        return false;
      } else if (code === 4019) {
        // 4019: 로그인페이지로 이동
        const app = useAppStore();
        // router.replace("/");
        router.replace({
          path: "/login",
          query: {
            tokenIssuId: app.tokenIssuId,
            encData: app.encData,
            sign: app.sign
          }
        });
      } else if (code === 4020) {
        // 4020: 토큰이상, 재로그인
        uAddError(9999, () => {
          setTimeout(() => {
            const app = useAppStore();
            app.error = {
              type: "alert",
              message: error.response?.data?.message
            };
          });
        });
        router.replace("/");
        return false;
      } else if (code === 3004) {
        // 3004: 중복 로그인
        uAddError(9999, () => {
          alert(message, async () => {
            //   await authSignout();
          });
        });
        return false;
      }

      // 에러 처리를 정의해 놓은 경우
      if (onError) {
        let errorResult;
        if (typeof onError === "function") {
          errorResult = onError(code);
        } else {
          errorResult = onError[String(code)]
            ? onError[String(code)](message)
            : undefined;
        }
        // 에러 콜백에서 결과를 주는 경우만 리턴 시킨다.
        if (errorResult !== undefined) return errorResult;
      }
      defaultErrorProc(error);
      return false;
    });
  //   .finally(() => {
  //     // 로딩 중
  //     app.apiQueue = app.apiQueue.filter((item) => item !== api);
  //     onFinally?.();
  //   });
  // app.apiQueue.push(api);
  return api;
};
