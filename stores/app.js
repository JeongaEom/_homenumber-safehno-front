export const useAppStore = defineStore("app", {
  state() {
    return {
      tokenIssuId: "",
      encData: "",
      sign: "",
      // isRouting: false,
      isMenuMinimized: localStorage.getItem("menu-minimized") === "1",
      isLoggedIn: null,
      // apiQueue: [],
      error: null,
      crtfcTkn: null,
      satk: null // 인증토큰
    };
  },
  actions: {
    addDaumPostcodeScript() {
      // daum 우편번호 찾기 API
      const script = document.createElement("script");
      script.src =
        /*
          CORS 사용 시 맥에서는 호환이 안될 수도 있어서,
          "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"; 대신에
          앞에 https:를 붙여서 사용해야 함.
        */
        "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
      script.async = true;
      document.head.appendChild(script);
    },
    errorPopup() {
      //새로고침 시 암호화 값이 없을때
      if (!this.tokenIssuId && !this.encData && !this.sign) {
        this.error = {
          type: "alert",
          message: "폐이지를 새로 고침하여 상태가 초기화 되었습니다.",
          hasClose: false,
          onConfirm: () => {
            window.close();
          }
        };
        return true;
      }
      return false;
    }
  }
});
