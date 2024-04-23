import axios from 'axios'

export default defineNuxtPlugin(nuxtApp => {
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000', // JSON 서버 URL
  })

  // 모든 컴포넌트에서 this.$axios로 접근할 수 있도록 설정
  nuxtApp.provide('axios', axiosInstance)
})