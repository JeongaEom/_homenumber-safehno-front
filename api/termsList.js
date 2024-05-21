import { call } from "@/api";

const termsList = (termsGrpCd) => {
  const termsStore = useTermsStore();
  return call({
    id: "2.7 약관리스트",
    endpoint: "/safehno/v1/terms/list",
    headers: "DEFAULT",
    data: { termsGrpCd },
    onResponse({ code, data }) {
      console.log("약관_code: ", code);
      console.log("약관_data: ", data);
      termsStore.data = data.terms.map((terms) => ({
        termsGrpNm: terms.termsGrpNm,
        termsCd: terms.termsCd,
        termsNm: terms.termsNm,
        termsCn: terms.termsCn,
        termsAgreEssntlYn: terms.termsAgreEssntlYn
      }));
    }
  });
};

export default termsList;
