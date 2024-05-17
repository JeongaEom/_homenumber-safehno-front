export const useEndDataStore = defineStore("endData", {
  state() {
    return {
      endData: "" // "1"이면 발급 | "2"이면 수정 | "3"이면 회원가입완료
    };
  }
});
