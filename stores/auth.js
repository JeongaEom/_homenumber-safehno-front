export const useAuthStore = defineStore("auth", {
  state() {
    return {
      nid: {},
      siteKey: null,
      signupTems: []
      // isAuthenticated: false,
      // errorMessage: ""
    };
  },
  actions: {
    // setAuthStatus(status) {
    //   this.isAuthenticated = status;
    // },
    // setErrorMessage(message) {
    //   this.errorMessage = message;
    // }
  }
});
