import { call } from "@/api";
// import Cookies from 'js-cookie';

const authSignin = (id, pwd, tokenIssuId, encData, sign) => {
  const router = useRouter();
  return call({
    id: "2.3 표준창 로그인",
    endpoint: "/safehno/v1/auth/signin",
    headers: "DEFAULT",
    withCredentials: true,
    data: {
      id,
      pwd,
      tokenIssuId,
      encData,
      sign
    },
    onResponse({ code }) {
      console.log('로그인_code: ', code);
      if (code === 2000) {
        // 로그인 성공 후
        // Cookies.set('_tki', tokenIssuId);
        // Cookies.set('_enc', encData);
        // Cookies.set('_sg', sign);

        // 페이지 또는 컴포넌트에서 인증 상태 확인
        // const token1 = Cookies.get('_tki');
        // const token2 = Cookies.get('_enc');
        // const token3 = Cookies.get('_sg');

        // console.log('token1 :', token1);
        // console.log('token2 :', token2);
        // console.log('token3 :', token3);

        router.push('/homenumberList');
        // router.push('/personalInformation');
        return true;
      } else {
        // if (!token1 || !token2 || !token3) {
        //   // 인증되지 않은 사용자 처리
        //   console.log('!token :', );
        // }
        return false;
      }
    },
  });
};

export default authSignin;
