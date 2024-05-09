interface AppState {
  isRouting: boolean;
  // isVerifing: boolean;
  // isLoggedIn: boolean | null;
  apiQueue: any[];
}

export const useAppStore = defineStore("app", {
  state:(): AppState => ({
    isRouting: false,
<<<<<<< HEAD
    isVerifing: false,
    isLoggedIn: null,
    apiQueue: []
=======
    // isVerifing: false,
    // isLoggedIn: null,
    apiQueue: [],
>>>>>>> 643c93d73f73d5f621ec552b88a87df5b0be7146
  }),
  actions: {
  },
});

if(import.meta.hot) {  //HMR
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
}