// import router from "@/router";
import { useAppStore } from "@/stores/app";
import Cookies from 'js-cookie';

export const formaNb = (Nb) => {
  if(Nb.length < 7) { // 문자열 길이가 7 미만인 경우 그대로 반환
    return Nb;
  }
  return `${Nb.substring(0, 3)}-${Nb.substring(3, 7)}-${Nb.substring(7)}`;
}

export const uLogin = (acsTkn) => {
  const app = useAppStore();
  Cookies.set('stdpAcsTkn', acsTkn);
  app.isLoggedIn = true;
  // navigateTo("/homenumberList", { replace: true }); // 필요에 따라 주석 해제 및 경로 조정
};

// export const uLogout = async () => {
//   const app = useAppStore();
//   // commonHeaders["Authorization"] = null;
//   // const authCookie = useCookie('auth_token');
//   // authCookie.value = ''; // 쿠키 값을 비움
//   app.isLoggedIn = false;
//   navigateTo("/login", { replace: true });
// };

export const uAddError = (priority, cb) => {
  const app = useAppStore();
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

export const uEnvMode = () => useRuntimeConfig().public.envMode;