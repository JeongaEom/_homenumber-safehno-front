import { call } from "@/api";
import { useRouter } from 'vue-router';

const tknEncValid = (tokenIssuId, encData, sign) => {
  const router = useRouter();
<<<<<<< HEAD
  return call({
    id: "2.16 암호화 토큰 유효성 검사",
    endpoint: "/safehno/v1/tkn/enc/valid",
=======
  call({
    id: "2.16 암호화 토큰 유효성 검사",
    endpoint: "/tkn/enc/valid",
>>>>>>> 643c93d73f73d5f621ec552b88a87df5b0be7146
    data: {
      tokenIssuId,
      encData,
      sign
    },
    onResponse({ data, code, message }) {
<<<<<<< HEAD
      console.log('유효성_code: ', code);
      if (code === 2000) {
        return router.push('/login');
      }
    },
    onError(error) {
      console.error('API 호출 에러:', error);
=======
      if (code === 2000) {
        router.push('/login');
        return true;
      } else {
        router.push('/login');
        return false;
      }
    },
    onError(error) { // API 호출 과정에서 발생한 네트워크 에러 처리
      console.error('API 호출 에러:', error);
      // window.close();
>>>>>>> 643c93d73f73d5f621ec552b88a87df5b0be7146
    }
  });
};

export default tknEncValid;
