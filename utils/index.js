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

export const uLogout = async () => {
  if (await knEncValid()) {
    const app = useAppStore();
    commonHeaders["Authorization"] = null;
    app.isLoggedIn = false;
    navigateTo("/login", { replace: true });
  }
};

export const uAddError = (priority, cb) => {

  // 라우팅중인 경우
  if (app.isRouting) {
    // 등록된 에러가 없으면
    if (app.error === null) {
      app.error = [priority, cb];
    }
    // 등록된 에러가 있으면 우선순위를 비교해서 교체한다.
    else if (app.error[0] < priority) {
      app.error = [priority, cb];
    }
  } else {
    cb();
  }
};