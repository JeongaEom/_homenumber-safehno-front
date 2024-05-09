// 쿠키에 stdpAcsTkn라는 key를 가진 값이 존재하면 메인 페이지로, 존재하지 않으면 로그인 페이지로 이동
// import { NextResponse } from "next/server";

// export function middleware(request) {
//   const auth = request.cookies.has("stdpAcsTkn");

//   // 로그인 + 로그인 페이지
//   if (auth && request.nextUrl.pathname.startsWith("/login")) {
//     return NextResponse.redirect(new URL("/homenumberList", request.url));
//   }

//   // 로그인 X + 로그인 페이지 X
//   if (!auth && !request.nextUrl.pathname.startsWith("/login")) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }
// }

// /*
//   config.matcher 설정:
//   특정 경로(api, _next/static, _next/image, favicon.ico)를 제외한 모든 경로에 대해
//   해당 미들웨어가 작동하도록 설정, 정적 파일이나 API 요청에 대해서는 미들웨어가 작동하지
//   않도록 하여 성능상의 이점을 제공
// */
// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
// };
