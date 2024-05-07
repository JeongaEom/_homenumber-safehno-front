interface User {
  id: string | null;
  pwd: string | null;
}

export const useAuthStore = defineStore('auth', {
  state:(): User => ({
    id: null,
    pwd: null
  }),
  actions: {
  },
})


if(import.meta.hot) { //HMR
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
// HMR은 개발 중에 애플리케이션을 수정할 때 페이지를 새로 고치지 않고 변경 사항을 빠르게 반영하는 데 사용
