interface Hno {
  hnoNo: string;
  virtlHnoNo: string;
  nm: string;
  moblphonNo: string;
  postNo: string;
  bassAddr: string;
  detailAddr: string;
  addrNcm: string;
}

interface HnoMyGet {
  infoProvAuthNo: string;
  termsGrpCd: string;
  hnos: Hno[]; // hnos 배열을 Hno 인터페이스 타입으로 정의
}

export const usehnoMyGetStore = defineStore('hnoMyGet', {
  state: (): HnoMyGet => ({
    infoProvAuthNo: "",
    termsGrpCd: "",
    hnos: [
      {
        hnoNo: "",
        virtlHnoNo: "",
        nm: "",
        moblphonNo: "",
        postNo: "",
        bassAddr: "",
        detailAddr: "",
        addrNcm: ""
      }
    ]
  }),
  actions: {
  },
})


if(import.meta.hot) { //HMR
  import.meta.hot.accept(acceptHMRUpdate(usehnoMyGetStore, import.meta.hot))
}
// HMR은 개발 중에 애플리케이션을 수정할 때 페이지를 새로 고치지 않고 변경 사항을 빠르게 반영하는 데 사용
