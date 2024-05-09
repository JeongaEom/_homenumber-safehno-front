import { call } from "@/api";
import { useRouter } from 'vue-router';

const tknEncValid = (tokenIssuId, encData, sign) => {
  const router = useRouter();
  return call({
    id: "2.16 암호화 토큰 유효성 검사",
    endpoint: "/safehno/v1/tkn/enc/valid",
    data: {
      tokenIssuId,
      encData,
      sign
    },
    onResponse({ data, code, message }) {
      console.log('유효성_code: ', code);
      if (code === 2000) {
        return router.push('/login');
      } if (code === 3001) {

      }
    },
    onError(error) {
      console.error('API 호출 에러:', error);
    }
  });
};

export default tknEncValid;
