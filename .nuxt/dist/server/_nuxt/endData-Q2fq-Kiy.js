import "vue";
import "hookable";
import "destr";
import "klona";
import "devalue";
import "defu";
import "#internal/nuxt/paths";
import { d as defineStore } from "../server.mjs";
defineStore("hnoMyGet", {
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
const useEndDataStore = defineStore("endData", {
  // 상태를 반환하는 함수입니다.
  state: () => ({
    endData: ""
    // "1"이면 발급 | "2"이면 수정 | "3"이면 회원가입완료 |"4"이면 에러 메세지
  }),
  actions: {}
});
export {
  useEndDataStore as u
};
//# sourceMappingURL=endData-Q2fq-Kiy.js.map
