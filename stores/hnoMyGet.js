export const useHnoMyGetStore = defineStore("hnoMyGet", {
  state() {
    return {
      infoProvAuthNo: "",
      virtlHnoNo: "",
      hnos: [
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
      isMyHnoYn: ""
    };
  }
});
