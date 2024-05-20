export const useHnoMyGetStore = defineStore("hnoMyGet", {
  state() {
    return {
      infoProvAuthNo: "",
      virtlHnoNo: "",
      hnos: [
        // 2.5 홈넘버 조회
        {
          hnoNo: "",
          subCd: "",
          nm: "",
          moblphonNo: "",
          postNo: "",
          bassAddr: "",
          detailAddr: "",
          addrNcm: ""
        }
      ],
      selectedItem: "",
      isMyHnoYn: "",
      hnosDeteil: [
        // 2.12 홈넘버 상세 조회
        {
          hnoIssuNo: "",
          hnoNo: "",
          nm: "",
          moblphonNo: "",
          postNo: "",
          bassAddr: "",
          detailAddr: "",
          addrNcm: "",
          issuDd: "",
          issuTime: "",
          goldnoYn: ""
        }
      ]
    };
  }
});
