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
      error: null
    };
  },
  actions: {
    addrds() {
      const apiScriptSrc =
        "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
      if (!document.querySelector(`[src='${apiScriptSrc}']`)) {
        const apiScript = document.createElement("script");
        apiScript.setAttribute("src", apiScriptSrc);
        document.head.appendChild(apiScript);
      }
    }
  }
});
