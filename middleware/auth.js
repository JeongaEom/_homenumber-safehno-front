// export default defineNuxtRouteMiddleware((to, from) => {
//   const { $cookies } = useNuxtApp();
//   const accessToken = $cookies.get('stdpAcsTkn');

//   if (!accessToken) {
//     return navigateTo('/login');
//   } else {
//     return navigateTo('/homenumberList');
//   }
// });

export default function ({ $cookies, redirect }) {
  const token = $cookies.get('stdpAcsTkn');
  if (!token) {
    redirect('/login');
  }else {
    return navigateTo('/homenumberList');
  }
  // 토큰이 있을 경우 추가적인 인증 처리를 할 수 있음
}