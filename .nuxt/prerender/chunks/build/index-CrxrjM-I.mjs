import { reactive, useSSRContext } from 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/vue/index.mjs';
import { u as useAppStore, a as uAddError } from './index-CJQT2Hhj.mjs';
import { a as useRouter } from './server.mjs';
import axios from 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/axios/index.js';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/h3/dist/index.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/devalue/index.js';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/ufo/dist/index.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/vue/server-renderer/index.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/destr/dist/index.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/hookable/dist/index.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/klona/dist/index.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/scule/dist/index.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/defu/dist/defu.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/ohash/dist/index.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Workspace/GitLab/homenumber-safehno-front/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/pathe/dist/index.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/unhead/dist/index.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/unctx/dist/index.mjs';
import 'file://C:/Workspace/GitLab/homenumber-safehno-front/node_modules/vue-router/dist/vue-router.node.mjs';

const tknEncValid = (tokenIssuId, encData, sign) => {
  return call({
    id: "2.16 \uC554\uD638\uD654 \uD1A0\uD070 \uC720\uD6A8\uC131 \uAC80\uC0AC",
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
      console.log("\uC720\uD6A8\uC131_code: ", code);
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
      console.log("\u{1F7E1} \uC694\uCCAD \uCDE8\uC18C:", id);
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
    console.log(`\u{1F7E2} API - ${config.url}
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
      `\u{1F534} API ${id}, ${code}, ${message}
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
        console.error("API \uD638\uCD9C \uC911 \uC624\uB958 \uBC1C\uC0DD:", error);
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

export { _sfc_main as default };
//# sourceMappingURL=index-CrxrjM-I.mjs.map
