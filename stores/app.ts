interface AppState {
  isRouting: boolean;
  isVerifing: boolean;
  isLoggedIn: boolean | null;
  apiQueue: any[];
}

export const useAppStore = defineStore("app", {
  state:(): AppState => ({
    isRouting: false,
    isVerifing: false,
    isLoggedIn: null,
    apiQueue: [],
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