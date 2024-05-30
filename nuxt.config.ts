// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ["@pinia/nuxt"],
  imports: {
    dirs: ["./stores"]
  },
  runtimeConfig: {
    public: {
      envMode:
        process.env.NODE_ENV === "development"
          ? `http://localhost:3002`
          : `https://dev-safehno.homenumber.co.kr/`,
      apiHost: ""
    }
  },
  hooks: {
    "nitro:config"(nitroConfig) {
      const isDevelopment = process.env.NODE_ENV === "development";
      nitroConfig.runtimeConfig = nitroConfig.runtimeConfig ?? {};
      nitroConfig.runtimeConfig.public = nitroConfig.runtimeConfig.public ?? {};
      nitroConfig.runtimeConfig.public.apiHost = isDevelopment
        ? "/api"
        : "https://dev-hno-api.homenumber.co.kr";
    }
  },
  css: [
    "@/assets/css/reset.css", // css 리셋
    "@/assets/scss/common.scss", // 기본
    "@/assets/scss/style.scss" // 스타일 설정
  ],
  components: true,
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
    }
  },
  ssr: false,
  spaLoadingTemplate: false
});
