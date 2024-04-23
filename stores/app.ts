interface AppState {
  isRouting: boolean
  isVerified: boolean | null
  isLoggedIn: boolean | null
}

export const useAppStore = defineStore("app", {
  state:(): AppState => ({
    isRouting: false,
    isVerified: null,
    isLoggedIn: null,
  }),
  actions: {
    init() {

      // daum postcode
      const apiScriptSrc =
        "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
      if (!document.querySelector(`[src='${apiScriptSrc}']`)) {
        const apiScript = document.createElement("script");
        apiScript.setAttribute("src", apiScriptSrc);
        document.head.appendChild(apiScript);
      }
    },
  },
});

if(import.meta.hot) {  //HMR
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
}