export const useAppStore = defineStore("app", {
  state() {
    return {
      isVerified: null,
      isVerifing: false,
      verifingPromise: null,
      verifingResolve: null,
      isRouting: false,
      isMenuMinimized: localStorage.getItem("menu-minimized") === "1",
      isLoggedIn: null,
      scrnId: null,
      preScrnId: null,
      navItems: [],
      menus: [],
      apiQueue: [],
      error: null,
      crtfcTkn: null,
      updateCode: null
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
    }
  }
});
