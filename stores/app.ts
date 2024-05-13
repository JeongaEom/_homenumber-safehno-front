interface AppState {
  isVerifing: boolean,
  verifingPromise: boolean | null,
  verifingResolve: boolean | null,
  isRouting: boolean;
  apiQueue: any[];
  tokenIssuId: string;
  encData: string;
  sign: string;
}

export const useAppStore = defineStore("app", {
  state:(): AppState => ({
    isVerifing: false,
    verifingPromise: null,
    verifingResolve: null,
    isRouting: false,
    apiQueue: [],
    tokenIssuId: "",
    encData: "",
    sign: ""
  }),
  actions: {
  },
});

if(import.meta.hot) { //HMR
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
};