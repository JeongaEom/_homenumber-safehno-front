export const useAuthStore = defineStore("auth", {
  state() {
    return {
      nid: {},
      signupTems: [],
      tokenIssuId: "",
      encData: "",
      sign: "",
      kakaoOauthUrl: null,
      name: "",
      birthDate: "",
      gender: "",
      mobileNo: ""
    };
  },
  actions: {}
});
