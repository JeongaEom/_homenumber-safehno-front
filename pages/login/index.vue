<script setup>
  import { reactive } from "vue";
  import { useRouter } from 'vue-router';
  import { authSignin } from "@/api";

  const router = useRouter();

  definePageMeta({
    layout: "login",
    name: "login",
    // middleware: 'auth'
  });

  const d = reactive({
    isOpen: false, // popup 열기 여부
    idType: "",
    texts: "",
    btntexts: "재시도",
    id: "",
    pwd: ""
  });

  const homnumberInquiry = () => {
    router.push('/homenumberInquiry');
  }

  const loginClick = async () => {

    if (!d.id || !d.pwd) {
      d.isOpen = true; // popup 열기 여부
    }

    if (d.id === "") {
      d.idType = "01"
      d.texts = "아이디를 입력해주세요.";
    }

    if (d.pwd === "") {
      d.idType = "02"
      d.texts = "패스워드(비밀번호)를 입력해주세요.";
    }

    // 임시
    // if (!d.id && !d.pwd) {
    //   d.idType = "03"
    //   d.texts = "입력하신 정보와 일치하는 회원이 존재하지 않습니다.";
    // }
    // e.preventDefault();
    const loginResult = await authSignin(d.id, d.pwd);
    // document.cookie = `auth=${loginResult}`;

    console.log('d.id: ', d.id);
    console.log('d.pwd: ', d.pwd);

    if (loginResult) {
      // router.push('/homenumberList');
      router.push('/signup');
    } else {
      alert("로그인에 실패했습니다.");
    }
  }

  const signupClick = () => {
    router.push('/signup');
  }
</script>

<template>
  <div class="tab-btns">
    <button class="bg-w line-active">회원</button>
    <button class="bg-w line" @click="homnumberInquiry">홈넘버</button>
  </div>
  <div class="content">
    <div class="inner">
      <input
        v-model="d.id"
        class="mb-btm-6"
        type="text"
        placeholder="아이디"
      >
      <input
        v-model="d.pwd"
        class="mb-btm-20"
        type="password"
        placeholder="패스워드"
      >
      <button
        class="mb-btm-20 red-active"
        @click="loginClick"
      >
        로그인
      </button>
      <p class="mb-btm-20">
        아이디/비밀번호 찾기는
        <br/>
        홈넘버 사이트에서 확인이 가능합니다.
        <NuxtLink
          to="https://www.homenumber.co.kr/"
          target="_blank"
        >
          바로가기 >
        </NuxtLink>
      </p>
      <button
        class="bg-g line"
        @click="signupClick"
      >
        홈넘버 회원가입
      </button>
    </div>
  </div>
  <div class="bottom">
    <p>
      고객님의 배송지 개인정보(이름, 휴대폰번호, 주소) 대신 사용하는
      <br/>
      11자리 보안번호로 개인정보를 안전하게 지켜드립니다.
    </p>
    <NuxtLink to="/serviceInfo">자세히 ></NuxtLink>
  </div>
  <popup
    :isVisible="d.isOpen"
    :idType="d.idType"
    :texts="d.texts"
    :btntexts="d.btntexts"
    @update:isVisible="d.isOpen = $event"
  />
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

  .content {
    margin: 2.5rem 0 4rem;
  }

  .bottom {
    color: $c-g600;
    a {
      display: block;
    }
  }

  @media (min-width: 769px) {
    .content {
      .inner {
        padding: 0 3rem;
      }
    }
  }

  @media (max-width: 768px) {
    .content {
      .inner {
        padding: 0 1rem;
      }
    }
    a {
      display: block;
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
</style>