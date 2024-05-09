<script setup>
  import { reactive, computed } from "vue";
  import { useRouter } from 'vue-router';
  import { formatNb } from '@/utils';

  const router = useRouter();

  definePageMeta({
    name: "homenumberInquiry",
    // middleware: [
    //   function (to, from) {
    //     // 로직 inline 정의
    //  },
    //   'app',
    // ],
});

  const d = reactive({
    link: true,
    linkAddress: "/login",
    text: "홈넘버로 조회",
    login: true, // (임시) 로그인 여부
    data: false, // false 홈넘버, 보안키 입력 | true 홈넘버 조회 리스트
    id: "",
    pw: "",
    list: [ // (임시)
      {
        homeNb: '10010001004',
        info: '회사',
        name: '홍길동',
        hp: '01012345678',
        addressNb: '06735',
        address: '서울특별시 서초구 강남대로 241',
        address1: '9층',
      },
      {
        homeNb: '10010001005',
        info: '회사2',
        name: '홍길자',
        hp: '01012345678',
        addressNb: '06735',
        address: '서울특별시 서초구 강남대로 241'
      }
    ],
});

//   const linkAddress = computed(() => {
//     return d.login ? "/homenumberList" : "/"; // (임시) 로그인 여부
// });

  const eventClick = () => {
    d.data = true; // (임시) 조회
  }

  const formatName = (name) => {
    if(name.length < 2) { // 이름이 2글자 미만인 경우 그대로 반환
      return name;
    }
    return name.substring(0, 1) + '*' + name.substring(2);
  }

  const nextClick = () => {
    router.push('/personalInformation');
  }
</script>

<template>
  <TitleTop
  :link="d.link"
  :linkAddress="d.linkAddress"
  :text="d.text"
  />
  <section>
    <div class="contents"
      :class="!d.data ? 'no-data' : ''"
    >
      <div v-if="!d.data">
        <input
          v-model="d.id"
          class="mb-btm-6"
          type="text"
          placeholder="홈넘버(숫자만)"
        >
        <input
          v-model="d.pw"
          class="mb-btm-20"
          type="text"
          placeholder="보안키"
        >
        <button
          class="mb-btm-20 red-active"
          @click="eventClick"
        >
          조회
        </button>
      </div>
      <div class="dataList" v-if="d.data">
        <ul>
          <li
            v-for="item in d.list"
          >
            <div class="active-line">
              <ul>
                <li>
                  <div>{{ formatNb(item.homeNb) }}</div>
                  <div>{{ item.info }}</div>
                </li>
                <li>
                  <div>{{ formatName(item.name) }}</div>
                  <div>{{ formatNb(item.hp) }}</div>
                </li>
                <li>
                  <div>{{ item.addressNb }}</div>
                  <div>
                    <div>{{ item.address }}</div>
                    <div v-if="item.address1">{{ item.address1 }}</div>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="bottom" v-if="!d.data">
      <p>찾고자 하시는 본인 혹은 상대방의 홈넘버 및 보안키를 입력하세요.
        <br/>보안키를 모르신다면 상대방에게 문의하세요.
      </p>
    </div>
    <button
      class="red-active"
      v-if="d.data"
      @click="nextClick"
    >
      다음
    </button>
  </section>
</template>

<style lang="scss" scoped>
  .contents {
    min-height: 514px;
  }
  .contents.no-data {
    min-height: 477px;
  }

  @media (min-width: 769px) {
    .contents {
      .inner {
        padding: 2rem 2rem 0;
      }
    }
    .bottom {
      p {
        text-align:center;
      }
    }
  }

  @media (max-width: 768px) {
    section {
      >.contents {
        padding: 0 ;
      }
    }
    .bottom {
      br {
        display: none;
      }
    }
  }
</style>