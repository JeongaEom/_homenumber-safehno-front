<script setup>
import { kakaoOauthReadyGet } from "@/api";

const auth = useAuthStore();

definePageMeta({
  layout: "default-none",
  name: "kakao"
});

//kakao REST API 사용
const kakaoClick = async () => {
  const isSuccess = await kakaoOauthReadyGet();
  if (isSuccess) {
    window.location.href = auth.kakaoOauthUrl;
    console.log("kakaoOauthUrl: ", auth.kakaoOauthUrl);
  }
};
</script>

<template>
  <button class="kakao-login-btn" @click="kakaoClick">
    <div>
      <svg
        width="36"
        height="34"
        viewBox="0 0 36 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.1 0C8.058 0 0 6.255 0 13.973C0 18.771 3.117 23.003 7.863 25.519L5.866 32.849C5.689 33.498 6.427 34.014 6.993 33.638L15.747 27.833C16.485 27.904 17.236 27.946 17.1 27.946C27.941 27.946 35.1 21.689 35.1 13.973C35.1 6.255 27.941 0 17.1 0Z"
          fill="black"
          fill-opacity="0.902"
        />
      </svg>
      <div class="kakao_txt">카카오로 시작하기</div>
    </div>
  </button>
</template>

<style lang="scss" scoped>
.kakao-login-btn {
  margin-top: 14px;
  background-color: #fee500;
  border: none;
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      &:nth-child(1) {
        margin-right: 8px;
        width: 20px;
      }
    }
    .kakao_txt {
      color: #191919;
    }
  }
}
</style>
