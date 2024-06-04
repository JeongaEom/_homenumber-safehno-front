<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useAppStore } from "@/stores";
import { authSignin } from "@/api";

const router = useRouter();
const app = useAppStore();

// 페이지 메타 설정
definePageMeta({
  layout: "login",
  name: "main"
});

const d = reactive({
  isOpen: false, // popup 열기 여부
  idType: "",
  texts: "",
  btntexts: "재시도",
  // id: "",
  // pwd: ""
  id: "jaeom50",
  pwd: "eja3249eja**"
});

const params = new URLSearchParams(window.location.search);
const tokenIssuId = params.get("tokenIssuId");
const encData = params.get("encData");
const sign = params.get("sign");

app.tokenIssuId = tokenIssuId;
app.encData = encData;
app.sign = sign;

// onMounted(() => {
//   setTimeout(() => {
//     const app = useAppStore();
//     app.error = {
//       type: "page",
//       message: "크리티컬 에러 처리",
//     };
//     router.replace("/error");
//   }, 2000);
// });

const homenumberInquiry = () => {
  // 홈넘버로 조회
  router.replace({
    path: "/homenumberInquiry",
    query: {
      tokenIssuId: tokenIssuId,
      encData: encData,
      sign: sign
    }
  });
};

const loginClick = async () => {
  const loginResult = await authSignin(
    d.id,
    d.pwd,
    app.tokenIssuId,
    app.encData,
    app.sign
  );
  console.log("loginResult: ", loginResult);
};

const signupClick = () => {
  // alert("준비중입니다.");
  router.push("/signup");
};
</script>

<template>
  <div class="tab-btns">
    <button class="bg-w line-active">회원</button>
    <button class="bg-w line" @click="homenumberInquiry">홈넘버</button>
  </div>
  <div class="content">
    <div class="inner">
      <input v-model="d.id" class="mb-btm-6" type="text" placeholder="아이디" />
      <input
        v-model="d.pwd"
        class="mb-btm-20"
        type="password"
        placeholder="패스워드"
      />
      <button class="mb-btm-20 red-active" @click="loginClick">로그인</button>
      <p class="mb-btm-20 homs">
        아이디/비밀번호 찾기는
        <br />
        홈넘버 사이트(homenumber.co.kr)에서 확인이 가능합니다.
      </p>
      <button class="bg-g line" @click="signupClick">홈넘버 회원가입</button>
    </div>
  </div>
  <div class="bottom">
    <p>
      고객님의 배송지 개인정보(이름, 휴대폰번호, 주소) 대신 사용하는
      <br />
      11자리 보안번호로 개인정보를 안전하게 지켜드립니다.
    </p>
    <NuxtLink to="/serviceInfo">자세히 ></NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
input,
button {
  height: 50px;
}

a {
  font-weight: bold;
  margin-top: 6px;
  &:hover {
    text-decoration: underline;
  }
}

.tab-btns {
  display: flex;
  align-items: center;
  button {
    &:nth-child(1) {
      border-radius: 4px 0 0 4px;
      -webkit-border-radius: 4px 0 0 4px;
      -moz-border-radius: 4px 0 0 4px;
      -ms-border-radius: 4px 0 0 4px;
      -o-border-radius: 4px 0 0 4px;
    }
    &:nth-child(2) {
      border-radius: 0 4px 4px 0;
      -webkit-border-radius: 0 4px 4px 0;
      -moz-border-radius: 0 4px 4px 0;
      -ms-border-radius: 0 4px 4px 0;
      -o-border-radius: 0 4px 4px 0;
    }
  }
}

.bottom {
  color: $c-g600;
  a {
    display: block;
  }
}

@media (max-width: 768px) {
  .content {
    margin: 1rem 0;
    .inner {
      padding: 0 4%;
    }
  }
}

@media (min-height: 741px) {
  .content {
    margin: 2.5rem 2.5rem 4rem;
  }
}

@media (min-height: 681px) and (max-height: 740px) {
  .content {
    margin: 2rem 0;
  }
}

@media (max-height: 680px) {
  .content {
    margin: 1rem 0;
  }
}

@media (max-height: 658px) {
  .tab-btns {
    button {
      height: 45px;
    }
  }

  .content {
    .inner {
      input {
        height: 45px;
      }
    }
  }

  .bottom {
    padding: 0.8rem 0;
  }
}

@media (max-height: 480px) {
  // 높이가 낮은 모바일
  button {
    height: 40px !important;
  }
}

@media (max-width: 768px) {
  a {
    display: block;
  }

  p.homs {
    margin-bottom: 1vh;
    margin-bottom: 1dvh;
  }
}

@media (max-width: 480px) {
  .bottom {
    p {
      br {
        display: none;
      }
    }
  }
}

@media (max-width: 390px) {
  input,
  button {
    height: 40px !important;
  }

  p,
  a,
  button {
    font-size: 14px;
  }
}
</style>
