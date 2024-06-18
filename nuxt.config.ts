// https://nuxt.com/docs/api/configuration/nuxt-config
import { config } from "dotenv";
config();

export default defineNuxtConfig({
  modules: ["@pinia/nuxt"],
  imports: {
    dirs: ["./stores"]
  },
  runtimeConfig: {
    public: {
      // 클라이언트와 서버 모두에서 접근 가능
      envMode: process.env.NODE_ENV,
      NUXT_ENV: process.env.NUXT_ENV || "local",
      apiHostPROD: process.env.API_HOST_PROD,
      apiHostDEV: process.env.API_HOST_DEV
    },
    private: {
      // 서버에서만 접근 가능
    }
  },
  css: [
    "@/assets/css/reset.css", // css 리셋
    "@/assets/scss/common.scss", // 기본
    "@/assets/scss/style.scss" // 스타일 설정
  ],
  components: true,
  build: {
    transpile: [] // (운영)빌드시 콘솔로그제거
  },
  hooks: {
    "build:before": () => {
      //env 동일하게 맞춤
      process.env.NODE_ENV = process.env.NUXT_ENV || "local";
    }
  },
  vite: {
    // Vite 설정
    css: {
      preprocessorOptions: {
        scss: {
          // 기본 컬러
          additionalData: '@import "@/assets/scss/_variables.scss";'
        }
      },
      devSourcemap: true // 모바일 100vh 스크롤 문제해결
    },
    server: {
      proxy: {
        "/api": {
          target: "https://dev-hno-api.homenumber.co.kr",
          changeOrigin: true, // 도메인 간 요청 가능
          rewrite: (path) => path.replace(/^\/api/, "") // 실제 요청에서 '/api' 제거
        }
      }
    },
    define: {
      //env 동일하게 맞춤
      "import.meta.env.MODE": JSON.stringify(process.env.NUXT_ENV),
      "process.env.NODE_ENV": JSON.stringify(process.env.NUXT_ENV)
    },
    esbuild: {
      drop: process.env.NUXT_ENV === "production" ? ["console"] : [] // (운영)빌드시 콘솔로그제거
    }
  },
  ssr: false,
  spaLoadingTemplate: false
});
