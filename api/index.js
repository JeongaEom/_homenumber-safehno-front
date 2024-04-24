import axios from "axios";
import { useAppStore } from "@/stores/app";

// import { API_DEBUG, API_HOST } from "./appSettings";
export { default as tknEncValid } from "./tkn/tknEncValid";
// export { default as authSignin } from "./auth/authSignin";



// 환경 변수에서 값을 읽어오거나, 기본값을 사용합니다.
const API_HOST = "http://localhost:5000" + "/safehno/v1";
const API_DEBUG = true;

const app = useAppStore();

export const commonHeaders = {
  "Content-Type": "application/json;charset=UTF-8",
  appId: "HOMEHNHPWEB-POPUP",
  appKey: "new1234", //임시번호
  Authorization: null,
};

export const getPresetHeaders = (headers) => {
  if (typeof headers === "string") {
    const base = {
      "Content-Type": commonHeaders["Content-Type"],
      appId: commonHeaders["appId"],
      appKey: commonHeaders["appKey"],
    };
    switch (headers) {
      case "DEFAULT":
        return {
          ...base,
          Authorization: commonHeaders["Authorization"],
        };
      case "PUBLIC":
        return base;
    }
  } else if (typeof headers === "function") {
    return headers();
  } else {
    return headers;
  }
};

const defaultErrorProc = (error) => {
  console.log(error);
  console.log("app.isRouting - ", app.isRouting);

  uAddError(0, () => {
    uAlert(error.response.data.message);
  });

  return false;
};

export const call = async (settings) => {
  const {
    id,
    endpoint,
    method,
    headers,
    beforeRequest,
    data = {},
    onResponse,
    onError,
    onFinally,
  } = settings

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
    const { data, status, config } = res;
    API_DEBUG && console.log(`🟢 API - ${config.url}\n`);
    API_DEBUG && console.log(id);
    const resultData = JSON.stringify(data, null, 2);
    API_DEBUG && console.log(resultData);

    return onResponse({
      code: data.code,
      data: data.data,
      message: data.message,
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

      // 액세스 토큰 만료
      if (code === 3000) {
        if(endpoint !== "/tkn/enc/valid") {
          // '2.16 암호화 토큰 유효성 검사' 아닐때
          return call(settings);
        } else {
          return false;
        }
      }

      ///// 작업중------
    // 4020: 토큰이상, 재로그인
    // 4022: 승인대기
    else if (code === 4020 || code === 4022) {
      uAddError(9999, () => {
        setTimeout(() => {
          uAlert(message);
          const modal = useModalStore();
          console.log(modal.items);
        });
      });
      router.push("/login");
      return false;
    }

    // 접근 불가 권한
    else if (code === 4013) {
      uAddError(9999, () => {
        setTimeout(() => {
          uAlert(message);
        });
      });
      router.push("/");
      return false;
    }

    // 3004: 중복 로그인
    else if (code === 3004) {
      uAddError(9999, () => {
        uAlert(message, async () => {
          await authSignout();
        });
      });
      return false;
    }

    // 에러 처리를 정의해 놓은 경우
    if (onError) {
      let errorResult = undefined;
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
    onFinally && onFinally();
  });
  app.apiQueue.push(api);
  return api;

};