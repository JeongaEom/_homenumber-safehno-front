import { useRouter } from "vue-router";
import { reqInfoGet } from "@/api";

export const useAppStore = defineStore("app", {
  state() {
    return {
      tokenIssuId: "",
      encData: "",
      sign: "",
      // isRouting: false,
      isMenuMinimized: localStorage.getItem("menu-minimized") === "1",
      isLoggedIn: null,
      // apiQueue: [],
      error: null,
      crtfcTkn: null, // 2.14 휴대폰 인증번호 요청
      closeType: null, // 닫기 버튼 아이프레임 iframe, 팝업 popup 여부 확인
      satk: null, // 인증토큰 (쿠키X)
      page: false // 2.20 표준창 요청 정보 조회 (쿠키X)
    };
  },
  actions: {
    link() {
      return process.env.NODE_ENV === "development"
        ? `http://localhost:3002`
        : `https://dev-safehno.homenumber.co.kr/`;
    },
    addDaumPostcodeScript() {
      // daum 우편번호 찾기 API
      const script = document.createElement("script");
      script.src =
        /*
          CORS 사용 시 맥에서는 호환이 안될 수도 있어서,
          "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"; 대신에
          앞에 https:를 붙여서 사용해야 함.
        */
        "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
      script.async = true;
      document.head.appendChild(script);
    },
    async requiredValue() {
      // 필수값 존재 여부 검사 _ 헤더 인증이 필요한 것
      const router = useRouter();
      //새로고침 시 암호화 값이 하나라도 없거나, 전체가 없을때
      if (!this.tokenIssuId || !this.encData || !this.sign) {
        const token = localStorage.getItem("tokenIssuId");
        console.log("token: ", token);
        if (!token) {
          // localStorage에 tokenIssuId가 없으면
          this.error = {
            type: "alert",
            message: "다시 시도",
            hasClose: false,
            onConfirm: () => {
              window.close();
            }
          };
        } else {
          // localStorage에 tokenIssuId가 있으면
          const enc = await reqInfoGet(token);
          console.log("reqInfoGet_표준창 요청 정보 조회: ", enc);
          const auth = useAuthStore();
          if (enc) {
            this.tokenIssuId = auth.tokenIssuId;
            this.encData = auth.encData;
            this.sign = auth.sign;
            if (!this.satk) {
              // 헤더 인증 필요
              router.replace({
                path: "/",
                query: {
                  tokenIssuId: this.tokenIssuId,
                  encData: this.encData,
                  sign: this.sign
                }
              });
            }
          } else {
            this.error = {
              type: "alert",
              message: this.error.message,
              hasClose: false,
              onConfirm: () => {
                window.close();
              }
            };
          }
        }
        return true;
      }
      return false;
    },
    async requiredValueNon() {
      // 필수값 존재 여부 검사_ 헤더 인증이 필요 없는것
      const router = useRouter();
      //새로고침 시 암호화 값이 하나라도 없거나, 전체가 없을때
      if (!this.tokenIssuId || !this.encData || !this.sign) {
        const token = localStorage.getItem("tokenIssuId");
        console.log("token: ", token);
        if (!token) {
          // localStorage에 tokenIssuId가 없으면
          this.error = {
            type: "alert",
            message: "다시 시도",
            hasClose: false,
            onConfirm: () => {
              window.close();
            }
          };
        } else {
          // localStorage에 tokenIssuId가 있으면
          const enc = await reqInfoGet(token);
          console.log("reqInfoGet_표준창 요청 정보 조회: ", enc);
          const auth = useAuthStore();
          if (enc) {
            this.tokenIssuId = auth.tokenIssuId;
            this.encData = auth.encData;
            this.sign = auth.sign;
            router.replace({
              path: "/",
              query: {
                tokenIssuId: this.tokenIssuId,
                encData: this.encData,
                sign: this.sign
              }
            });
          } else {
            this.error = {
              type: "alert",
              message: this.error.message,
              hasClose: false,
              onConfirm: () => {
                window.close();
              }
            };
          }
        }
        return true;
      }
      return false;
    }
  }
});
