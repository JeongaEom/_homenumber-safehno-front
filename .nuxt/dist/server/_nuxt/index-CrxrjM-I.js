import { reactive, useSSRContext } from "vue";
import "hookable";
import { u as useAppStore } from "./app-B3aFB6x9.js";
import { u as uAddError } from "./index-CJQT2Hhj.js";
import { a as useRouter } from "../server.mjs";
import axios from "axios";
import "destr";
import "klona";
import "devalue";
import "defu";
import "#internal/nuxt/paths";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "radix3";
import "@vue/devtools-api";
import "vue/server-renderer";
const tknEncValid = (tokenIssuId, encData, sign) => {
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
      console.log("유효성_code: ", code);
      if (code === 2e3) {
        return true;
      } else {
        return false;
      }
    }
  });
};
const API_HOST = "https://dev-hno-api.homenumber.co.kr";
const commonHeaders = {
  "Content-Type": "application/json;charset=UTF-8",
  appId: "SAFEHNO",
  apikey: "609af5e1-0047-49a5-93eb-c3a1db30fb92",
  Authorization: null
};
const getPresetHeaders = (headers) => {
  if (typeof headers === "string") {
    const base = {
      "Content-Type": commonHeaders["Content-Type"],
      appId: commonHeaders["appId"],
      apikey: commonHeaders["apikey"]
    };
    switch (headers) {
      case "DEFAULT":
        return {
          ...base,
          Authorization: commonHeaders["Authorization"]
        };
      case "DEFAULT_FORM":
        return {
          ...base,
          "Content-Type": "multipart/form-data",
          Authorization: commonHeaders["Authorization"]
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
  const app = useAppStore();
  console.log(error);
  console.log("app.isRouting - ", app.isRouting);
  uAddError(0, () => {
    alert(error.response.data.message);
  });
  return false;
};
const call = async (settings) => {
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
  if (beforeRequest) {
    const validRequest = await beforeRequest();
    if (validRequest === false) {
      console.log("🟡 요청 취소:", id);
      return false;
    }
  }
  Object.keys(data).forEach((key) => {
    if (data[key] === null)
      delete data[key];
  });
  const app = useAppStore();
  const api = axios({
    method: method || "post",
    url: API_HOST + endpoint,
    headers: getPresetHeaders(headers),
    data,
    // 쿠키 기반 인증 (axios)
    withCredentials: withCredentials !== void 0 ? withCredentials : false
  }).then((res) => {
    const { data: data2, config } = res;
    console.log(`🟢 API - ${config.url}
`);
    console.log(id);
    const resultData = JSON.stringify(data2, null, 2);
    console.log(resultData);
    return onResponse({
      code: data2.code,
      data: data2.data,
      message: data2.message
    });
  }).catch(async (error) => {
    var _a, _b, _c, _d, _e;
    const code = (_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.code;
    const message = (_d = (_c = error.response) == null ? void 0 : _c.data) == null ? void 0 : _d.message;
    console.log(
      `🔴 API ${id}, ${code}, ${message}
`,
      (_e = error.response) == null ? void 0 : _e.data
    );
    const router = useRouter();
    if (code === 3e3) {
      if (endpoint !== "/session/valid") {
        return call(settings);
      } else {
        return false;
      }
    } else if (code === 4020 || code === 4022) {
      uAddError(9999, () => {
        setTimeout(() => {
          alert(message);
          const modal = useModalStore();
          console.log(modal.items);
        });
      });
      router.push("/login");
      return false;
    } else if (code === 4013) {
      uAddError(9999, () => {
        setTimeout(() => {
          alert(message);
        });
      });
      router.push("/");
      return false;
    } else if (code === 3004) {
      uAddError(9999, () => {
        alert(message, async () => {
        });
      });
      return false;
    }
    if (onError) {
      let errorResult = void 0;
      if (typeof onError === "function") {
        errorResult = onError(code);
      } else {
        errorResult = onError[String(code)] ? onError[String(code)](message) : void 0;
      }
      if (errorResult !== void 0)
        return errorResult;
    }
    defaultErrorProc(error);
    return false;
  }).finally(() => {
    app.apiQueue = app.apiQueue.filter((item) => item !== api);
    onFinally && onFinally();
  });
  app.apiQueue.push(api);
  return api;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const d = reactive({
      tokenIssuId: "",
      encData: "",
      sign: ""
    });
    const response = async () => {
      try {
        await tknEncValid(d.tokenIssuId, d.encData, d.sign);
      } catch (error) {
        console.error("API 호출 중 오류 발생:", error);
      }
    };
    console.log("response: ", response);
    return (_ctx, _push, _parent, _attrs) => {
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-CrxrjM-I.js.map
