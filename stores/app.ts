interface AppState {
  isRouting: boolean;
  isVerifing: boolean;
  isLoggedIn: boolean | null;
  apiQueue: any[];
  tokenIssuId: string;
  encData: string;
  sign: string;
}

export const useAppStore = defineStore("app", {
  state:(): AppState => ({
    isRouting: false,
    isVerifing: false,
    isLoggedIn: null,
    apiQueue: [],
    tokenIssuId: "",
    encData: "",
    sign: "",
  }),
  actions: {
  },
});

if(import.meta.hot) {  //HMR
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
}