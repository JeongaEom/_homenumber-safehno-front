import axios from "axios";
import { useAppStore } from "@/stores/app";

// import { API_DEBUG, API_HOST } from "./appSettings";
export { default as authSignin } from "./authSignin";
export { default as hnoMyGet } from "./hnoMyGet";
export { default as noauthHnoGet } from "./noauthHnoGet";
export { default as termsAgree } from "./termsAgree";
export { default as termsList } from "./termsList";
export { default as hnoIssDo } from "./hnoIssDo";
export { default as hnoDupchk } from "./hnoDupchk";
export { default as smsCertiReq } from "./smsCertiReq";
export { default as smsCertiConfirm } from "./smsCertiConfirm";
export { default as hnoGet } from "./hnoGet";
export { default as hnoUpdate } from "./hnoUpdate";

// const API_HOST = "https://dev-hno-api.homenumber.co.kr";
const API_HOST =
  process.env.NODE_ENV === "development"
    ? "/api"
    : "https://dev-hno-api.homenumber.co.kr";
const API_DEBUG = true;

console.log("API 호스트:", API_HOST);

export const commonHeaders = {
  "Content-Type": "application/json;charset=UTF-8",
  appId: "SAFEHNO",
  apikey: "609af5e1-0047-49a5-93eb-c3a1db30fb92"
};

export const getPresetHeaders = (headers = {}) => {
  if (typeof headers === "string") {
    // headers가 문자열인 경우
    const base = {
      "Content-Type": commonHeaders["Content-Type"],
      appId: commonHeaders["appId"],
      apikey: commonHeaders["apikey"]
    };
    switch (headers) {
      case "DEFAULT":
        return {
          ...base
        };
      case "DEFAULT_FORM":
        return {
          ...base,
          "Content-Type": "application/x-www-form-urlencoded"
        };
      case "PUBLIC":
        return base;
    }
  }

  if (typeof headers === "function") {
    // headers가 함수인 경우
    return headers();
  }

  if (typeof headers === "object" && !Array.isArray(headers)) {
    // headers가 객체인 경우 | commonHeaders와 headers를 병합하여 반환
    return {
      ...commonHeaders,
      ...headers
    };
  }

  // headers가 없는 경우
  return commonHeaders;
};

const defaultErrorProc = (error) => {
  const app = useAppStore();
  app.error = {
    type: "alert",
    message: error.response?.data?.message
  };
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
    withCredentials,
    beforeRequest,
    data = {},
    onResponse,
    onError,
    onFinally
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

  const app = useAppStore();
  // 호출
  // 타겟 URL 설정
  // endpoint로 호출하는 경우(미리 정의된 HOST를 붙인다)
  // url로 호출하는 경우는 그대로 호출
  const api = axios({
    method: method || "post",
    url: API_HOST + endpoint,
    headers: getPresetHeaders(headers),
    data,
    // 쿠키 기반 인증 (axios)
    withCredentials: withCredentials !== undefined ? withCredentials : false
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

      API_DEBUG &&
        console.log(
          `🔴 API ${id}, ${code}, ${message}\n`,
          error.response?.data
        );

      const router = useRouter();

      if (code === 4019) {
        // 4019: 로그인페이지로 이동
        router.replace("/");
      } else if (code === 4020 || code === 4022) {
        // 4020: 토큰이상, 재로그인
        // 4022: 승인대기
        uAddError(9999, () => {
          setTimeout(() => {
            alert(message);
            // const modal = useModalStore();
            // console.log(modal.items);
          });
        });
        router.push("/login");
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
    })
    .finally(() => {
      // 로딩 중
      app.apiQueue = app.apiQueue.filter((item) => item !== api);
      onFinally?.();
    });
  app.apiQueue.push(api);
  return api;
};
