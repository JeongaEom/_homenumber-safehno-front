export const useTermsStore = defineStore('Terms', {
  state() {
    return {
      data: [
        {
          termsGrpNm: "",
          termsCd: "",
          termsNm: "",
          termsCn: "",
          termsAgreEssntlYn: "",
        }
      ]
    };
  },
  actions: {
  },
});
