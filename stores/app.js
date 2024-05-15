export const useAppStore = defineStore("app", {
  state() {
    return {
      isVerified: null,
      isVerifing: false,
      verifingPromise: null,
      verifingResolve: null,
      isRouting: false,
      isMenuMinimized:
        localStorage.getItem("menu-minimized") === "1" ? true : false,
      isLoggedIn: null,
      scrnId: null,
      preScrnId: null,
      navItems: [],
      error: null,
      menus: [],
      apiQueue: [],
      error: null,
    };
  },
});
