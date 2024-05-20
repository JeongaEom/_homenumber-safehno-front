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
      crtfcTkn: null
    };
  },
  actions: {
    addDaumPostcodeScript() {
      // daum 우편번호 찾기 API
      const script = document.createElement("script");
      script.src =
        "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }
});
