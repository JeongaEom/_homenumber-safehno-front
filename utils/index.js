// import router from "@/router";
import { useAppStore } from "@/stores/app";

const app = useAppStore();

export const formaNb = (Nb) => {
  if(Nb.length < 7) { // 문자열 길이가 7 미만인 경우 그대로 반환
    return Nb;
  }
  return `${Nb.substring(0, 3)}-${Nb.substring(3, 7)}-${Nb.substring(7)}`;
}

export const uLogin = (acsTkn) => {
  commonHeaders["Authorization"] = acsTkn;
  app.isLoggedIn = true;
};