// https://nuxt.com/docs/api/configuration/nuxt-config

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
  ],
  imports: {
    dirs: ["./stores"],
  },
  runtimeConfig: {
    public: {
      envMode: "DEV", // can be overridden by NUXT_PUBLIC_ENV_MODE environment variable
    },
  },
  css: [
    '@/assets/css/reset.css', // css 리셋
    '@/assets/scss/common.scss', // 기본
    '@/assets/scss/style.scss', // 스타일 설정
  ],
  components: true,
  vite: {
    // Vite 설정
    css: {
      preprocessorOptions: {
        scss: { // 기본 컬러
          additionalData: '@import "@/assets/scss/_variables.scss";',
        },
      },
    },
    server: {
      hmr: {
        port: 3002,
      }
    },
  },
  build: {
    // 빌드 설정
  },
  nitro: {
    // Nitro 설정
  },
});
