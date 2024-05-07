import { call } from "@/api";
import { useRouter } from 'vue-router';

const tknEncValid = (tokenIssuId, encData, sign ) => {
  const router = useRouter();
  return new Promise((resolve, reject) => {
    call({
      id: "2.16 암호화 토큰 유효성 검사",
      endpoint: "/tkn/enc/valid",
      data: {
        tokenIssuId,
        encData,
        sign
      },
      onResponse({ data, code, message }) {
        if (code === 2000) {
          resolve({ data, code, message });
          router.push('/login');
        } else {
          reject(new Error(message));
        }
      },
      onError(error) { // API 호출 과정에서 발생한 네트워크 에러 처리
        console.error('API 호출 에러:', error);
        window.close();
      }
    });
  });
};

export default tknEncValid;
