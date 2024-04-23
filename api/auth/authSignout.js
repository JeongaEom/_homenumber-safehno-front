import { call } from "@/api";

const logout = () => {
  localStorage.removeItem('authToken'); // 로컬 스토리지에서 토큰 제거
  // 로그아웃 후의 로직 처리 (예: 로그인 페이지로 리다이렉트)
};
