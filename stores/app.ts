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
  },
});

if(import.meta.hot) {  //HMR
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
}