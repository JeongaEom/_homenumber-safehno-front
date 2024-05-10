interface AuthState {
  isAuthenticated: boolean;
  errorMessage: string;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    isAuthenticated: false,
    errorMessage: ''
  }),
  actions: {
    setAuthStatus(status: boolean) {
      this.isAuthenticated = status;
    },
    setErrorMessage(message: string) {
      this.errorMessage = message;
    }
  }
});

if(import.meta.hot) { //HMR
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
};