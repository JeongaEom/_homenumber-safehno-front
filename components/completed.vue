<script setup>
  import { reactive, onMounted } from "vue";
  import { useRouter } from 'vue-router';
  import { useEndDataStore } from '@/stores';

  const router = useRouter();
  const endDataStore = useEndDataStore();

  const d = reactive({
    data: "",
    btntext: "",
  });

  console.log('endDataStore.endData : ', endDataStore.endData);

  // 로그인 상태 확인 로직 필요
  // const isLoggedIn = true; // 예시 값

  const endnextClick = () => {
    // 로그인 시 홈넘버 조회로 이동
    router.push('/homenumberList');

    // 비로그인 시 로그인으로 이동
    // router.push('/login');

    // if(isLoggedIn) {
    //   router.push('/homenumberList');
    // } else {
    //   router.push('/login');
    // }
  }

  onMounted(() => {
    if(endDataStore.endData === '1') {
      d.data = "발급"
      d.btntext = "홈넘버 조회로 이동"
    } else if(endDataStore.endData === '2') {
      d.data = "수정"
      d.btntext = "내 홈넘버 보기"
    } else if(endDataStore.endData === '3') {
      d.btntext = "내 홈넘버 보기"
    }
  });
</script>

<template>
  <div
    class="contents"
    :class="{
      issuance: endDataStore.endData === '1',
      modification: endDataStore.endData === '2',
      signup: endDataStore.endData === '3'
    }"
  >
    <div>
      <img src="@/assets/images/data-end.png" alt="홈넘버 데이터 없음">
      <div v-if="endDataStore.endData !== '3'">
        홈넘버 {{ d.data }}이<br/>
        성공적으로 이루어졌습니다.
      </div>
      <div v-else-if="endDataStore.endData === '3'">
        회원 가입이 완료되었습니다. <br/>
        서비스 이용을 위해 홈넘버를 발급해 주세요.
      </div>
    </div>
  </div>
  <button
    class="bg-w line-active"
    @click="endnextClick()"
  >
    {{ d.btntext }}
  </button>
</template>

<style lang="scss" scoped>
  .contents {
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      img {
        width: 70px;
        margin: 0 auto 10%;
        display: block;
      }
      div {
        font-size: 24px;
        text-align: center;
        font-weight: bold;
        line-height: 3rem;
      }
    }
  }

@media (min-width: 400px) {
  .issuance {
    min-height: 514px;
  }
  .modification {
    min-height: 514px;
  }
  .signup {
    min-height: 476px;
  }
}
</style>