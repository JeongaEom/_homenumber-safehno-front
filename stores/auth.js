export const useAuthStore = defineStore("auth", {
  state() {
    return {
      isAuthenticated: false,
      errorMessage: ""
    };
  },
  actions: {
    setAuthStatus(status) {
      this.isAuthenticated = status;
    },
    setErrorMessage(message) {
      this.errorMessage = message;
    }
  }
});
