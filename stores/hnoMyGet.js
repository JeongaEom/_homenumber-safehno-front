export const useHnoMyGetStore = defineStore("hnoMyGet", {
  state() {
    return {
      infoProvAuthNo: "",
      virtlHnoNo: "",
      moblphonNo: "",
      hnos: [
        {
          hnoIssuNo: "",
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
      isMyHnoYn: ""
    };
  }
});
