import { call } from "@/api";

const termsList = (termsGrpCd) => {
  const termsStore = useTermsStore();
  return call({
    id: "2.7 약관리스트",
    endpoint: "/safehno/v1/terms/list",
    headers: "DEFAULT",
    data: { termsGrpCd },
    onResponse({ code, data }) {
      termsStore.data = data.terms.map((terms) => ({
        termsGrpCd: terms.termsGrpCd,
        termsGrpNm: terms.termsGrpNm,
        termsCd: terms.termsCd,
        termsVer: terms.termsVer,
        termsNm: terms.termsNm,
        termsCn: terms.termsCn,
        termsAgreEssntlYn: terms.termsAgreEssntlYn
      }));
      return true;
    }
  });
};

export default termsList;
