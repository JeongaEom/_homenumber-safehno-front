// import { authTknReiss, userMenuList} from "@/api";

export default defineNuxtRouteMiddleware((to, from) => {
//   window.dispatchEvent(new CustomEvent("before.route-start"));
//   const app = useAppStore();
//   app.isRouting = true;
//   const needAuth = to.meta.noAuth ? false : true;
//   // Verify
//   if(app.isVerified === null && needAuth) {
//     app.isVerified = true;
//     await authTknReiss();
//  }
//   // auth
//   if(needAuth) {
//     const res = await userMenuList();
//     if(res === 4001) {
//       window.addEventListener(
//         "after.route-changed",
//         () => {
//           uAlert("접근 가능한 IP가 아닙니다. IP를 등록 후 이용해주세요.");
//        },
//         { once: true}
//       );
//       return navigateTo("/noauth-ip-update");
//    }
//  }
})