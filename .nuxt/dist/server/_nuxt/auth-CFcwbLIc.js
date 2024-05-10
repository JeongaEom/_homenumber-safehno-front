import "vue";
import "hookable";
import "destr";
import "klona";
import "devalue";
import "defu";
import "#internal/nuxt/paths";
import { d as defineStore } from "../server.mjs";
const useEndDataStore = defineStore("endData", {
  // 상태를 반환하는 함수입니다.
  state: () => ({
    endData: ""
    // "1"이면 발급 | "2"이면 수정 | "3"이면 회원가입완료 |"4"이면 에러 메세지
  }),
  actions: {}
});
const useHnoMyGetStore = defineStore("hnoMyGet", {
  state: () => ({
    infoProvAuthNo: "",
    termsGrpCd: "",
    hnos: [
      {
        hnoNo: "",
        virtlHnoNo: "",
        nm: "",
        moblphonNo: "",
        postNo: "",
        bassAddr: "",
        detailAddr: "",
        addrNcm: ""
      }
    ]
  }),
  actions: {}
});
defineStore("auth", {
  state: () => ({
    isAuthenticated: false,
    errorMessage: ""
  }),
  actions: {
    setAuthStatus(status) {
      this.isAuthenticated = status;
    },
    setErrorMessage(message) {
      this.errorMessage = message;
    }
  }
});
export {
  useEndDataStore as a,
  useHnoMyGetStore as u
};
//# sourceMappingURL=auth-CFcwbLIc.js.map
