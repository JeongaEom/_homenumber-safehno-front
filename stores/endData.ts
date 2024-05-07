interface EndDataState {
  endData: string;
}

export const useEndDataStore = defineStore('endData', {
  // 상태를 반환하는 함수입니다.
  state: (): EndDataState => ({
    endData: "", // "1"이면 발급 | "2"이면 수정 | "3"이면 회원가입완료
  }),
  actions: {
  }
})

if(import.meta.hot) { //HMR
  import.meta.hot.accept(acceptHMRUpdate(useEndDataStore, import.meta.hot))
}