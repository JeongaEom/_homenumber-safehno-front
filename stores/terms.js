export const useTermsStore = defineStore("Terms", {
  state() {
    return {
      data: [
        {
          termsGrpCd: "",
          termsGrpNm: "",
          termsCd: "",
          termsVer: "",
          termsNm: "",
          termsCn: "",
          termsAgreEssntlYn: ""
        }
      ]
    };
  },
  actions: {}
});
