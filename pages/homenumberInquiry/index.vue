<script setup>
  import { reactive, computed } from "vue";
  import { useRouter } from 'vue-router';
  import { noauthHnoGet } from '@/api';
  import { useAppStore } from '@/stores'
  // import { formatNb } from '@/utils';

  const router = useRouter();
  const app = useAppStore();

  definePageMeta({
    name: "homenumberInquiry",
  });

  const d = reactive({
    link: true,
    linkAddress: "/",
    text: "홈넘버로 조회",
    noDataText1: "등록된 홈넘버가",
    noDataText2: "존재하지 않습니다.",
    login: true, // (임시) 로그인 여부
    data: false, // false 홈넘버, 보안키 입력 | true 홈넘버 조회 리스트
    // hnoNo: "",
    // scrtky: "",
    hnoNo: "10042032300",
    scrtky: "7220",
    list: [ // (임시)
      {
        homeNb: '10010001004',
        info: '회사',
        name: '홍**동',
        hp: '01012345678',
        addressNb: '06735',
        address: '서울특별시 서초구 강남대로 241',
        address1: '9층',
      }
    ],
  });

  console.log('d.hnoNo1: ', d.hnoNo);
  console.log('d.scrtky1: ', d.scrtky);

  console.log('tokenIssuId1: ', app.tokenIssuId);
  console.log('encData1: ', app.encData);
  console.log('sign1: ', app.sign);

  const eventClick = async() => {
    const noauth = await noauthHnoGet(d.hnoNo, d.scrtky, app.tokenIssuId, app.encData, app.sign);

    // if(noauth) {
      d.data = true;
    // }

    console.log('d.hnoNo: ', d.hnoNo);
    console.log('d.scrtky: ', d.scrtky);
    console.log('noauth: ', noauth);

    console.log('tokenIssuId: ', app.tokenIssuId);
    console.log('encData: ', app.encData);
    console.log('sign: ', app.sign);
  };

  // const formatName = (name) => {
  //   if(name.length < 2) { // 이름이 2글자 미만인 경우 그대로 반환
  //     return name;
  //   }
  //   return name.substring(0, 1) + '*' + name.substring(2);
  // };

  const homenumberlogin = () => {
    // if () {

    // } else {

    // }
    router.replace({
      path: '/',
      query: {
        tokenIssuId: app.tokenIssuId,
        encData: app.encData,
        sign: app.sign
      }
    });
  };

  const hnbIssuance = () => {
    router.replace({
      path: '/issuance',
      query: {
        tokenIssuId: app.tokenIssuId,
        encData: app.encData,
        sign: app.sign
      }
    });
  };

  const nextClick = () => {
    router.replace('/personalInformation');
  };
</script>

<template>
  <TitleTop
  :link="d.link"
  :linkAddress="d.linkAddress"
  :text="d.text"
  />
  <section>
    <div class="top title" v-if="d.data">
      <button class="bg-w line-active" @click="homenumberlogin">회원</button>
      <button class="bg-w line-active" @click="hnbIssuance">홈넘버 추가</button>
    </div>
    <div :class="!d.data ? 'contents no-data' : 'contents'">
      <div v-if="!d.data">
        <input
          v-model="d.hnoNo"
          class="mb-btm-6"
          type="text"
          placeholder="홈넘버(숫자만)"
        >
        <input
          v-model="d.scrtky"
          class="mb-btm-20"
          type="password"
          placeholder="보안키"
        >
        <button
          class="mb-btm-20 red-active"
          @click="eventClick"
        >
          조회
        </button>
      </div>
      <div v-if="d.data">
        <!-- <div class="notData" v-if="myGetStore.hnos.length === 0"> -->
        <detallError
        :noDataText1="d.noDataText1"
        :noDataText2="d.noDataText2"
        />
        <!-- <div class="dataList">
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
                    <div>{{ item.name }}</div>
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
        </div> -->
      </div>
    </div>
    <div class="bottom" v-if="!d.data">
      <p>찾고자 하시는 본인 혹은 상대방의 홈넘버 및 보안키를 입력하세요.
        <br/>보안키를 모르신다면 상대방에게 문의하세요.
      </p>
    </div>
    <button
      :class="d.isActive ? 'red-active':'default'"
      v-if="d.data"
      @click="nextClick"
    >
      다음
    </button>
  </section>
</template>

<style lang="scss" scoped>
  .contents {
    display: flex;
    flex-direction: column;
  }
  .contents.no-data {
    min-height: 477px;
  }

  @media (min-width: 769px) {
    section {
      >.contents {
        padding: 0 ;
        min-height: 443px;
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
  }

  @media (max-width: 768px) {
    section {
      >.contents {
        padding: 0 ;
        min-height: 443px;
      }
    }
    .bottom {
      br {
        display: none;
      }
    }
  }
  .notData {
    margin-top: 26%;
  }
</style>