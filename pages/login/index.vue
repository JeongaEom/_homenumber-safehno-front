<script setup>
  import { reactive, ref } from "vue";
  import { useRouter } from 'vue-router';
  // import { useAppStore } from '@/stores/app'
  // import { authSignin } from "@/api";

  const router = useRouter();
  // const appStore = useAppStore()

  definePageMeta({
    layout: "login",
    name: "login",
  });

  const d = reactive({
    id: "",
    pwd: "",
    tokenIssuId: "",
    encData: "",
    sign: "",
    isOpen: false, // popup 열기 여부
    idType: "",
    texts: "",
    btntexts: "",
  });

  const signin = ref(
    [
      {
        id: "user1",
        pwd: "1234",
        tokenIssuId: "someRandomAccessToken123",
        encData: "임시aaa",
        sign: ""
      },
      {
        id: "user2",
        pwd: "1234",
        tokenIssuId: "someRandomAccessToken456",
        encData: "임시bbb",
        sign: ""
      }
    ]
  );

  const homnumberInquiry = () => {
    router.push('/homenumberInquiry');
  }

  const loginClick = async () => {

    if (!d.id || !d.pwd) {
      d.isOpen = true; // popup 열기 여부
    }

    if (!d.id) {
      // d.isOpen = true; // popup 열기 여부
      d.idType = "01"
      d.texts = "아이디 ...";
      d.btntexts = "재시도";
    } else if (!d.pwd) {
      // d.isOpen = true; // popup 열기 여부
      d.idType = "02"
      d.texts = "비밀번호 ...";
      d.btntexts = "재시도";
    }

    // signin.value.forEach(user => {
    //   console.log('user.id :',user.id);
    //   console.log('user.pwd: ',user.pwd);
    // });

  if (
    d.id === signin.value[0].id && d.pwd === signin.value[0].pwd
  ){
    // if (
    //   await authSignin(
    //     d.id,
    //     d.pwd,
    //     d.tokenIssuId,
    //     d.encData,
    //     d.sign,
    //   )
    // ) {
      router.push('/homnumberList');
      //임시
      commonHeaders["Authorization"] = signin.value[0].tokenIssuId;
      // app.isLoggedIn = true;
    // }
  }
    console.log(signin.value[0]);
    console.log(commonHeaders["Authorization"]);
    console.log('d.idType : ', d.idType);
    console.log('d.texts', d.texts);
    console.log('d.id : ', d.id);
    console.log('d.pwd : ', d.pwd);
    localstrogr
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