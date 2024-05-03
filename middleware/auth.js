export default function ({ app, redirect }) {
  // 쿠키에서 인증 정보를 가져옵니다.
  const loggedIn = app.$cookies.get('stdpAcsTkn');

  // 현재 경로가 로그인 페이지인지 확인합니다.
  const isLoginPage = window.location.pathname === '/login';

  // if (loggedIn && isLoginPage) {
  //   // 로그인 상태이고 로그인 페이지에 있을 경우, 홈 페이지로 리다이렉션합니다.
  //   return redirect('/');
  // } else if (!loggedIn && !isLoginPage) {
  //   // 로그아웃 상태이고 로그인 페이지가 아닐 경우, 로그인 페이지로 리다이렉션합니다.
  //   return redirect('/login');
  // }
}