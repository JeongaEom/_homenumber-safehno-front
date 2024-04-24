<script setup>
  import { reactive } from "vue";
  import { useRouter } from 'vue-router';
  import { formaNb } from '@/utils';

  const router = useRouter();

  definePageMeta({
    name: "homnumberList",
    // middleware: [
    //   function (to, from) {
    //     // 로직 inline 정의
    //  },
    //   'app',
    // ],
  });

  const d = reactive({
    text: "홈넘버",
    selectedHomeNb: "",
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
    // list: [],
    isActive: false,
  });

  const hnbInquiry = () => {
    router.push('/homenumberInquiry');
  }

  const hnbIssuance = () => {
    router.push('/issuance');
  }

  const formatName = (name) => {
    if(name.length < 2) { // 이름이 2글자 미만인 경우 그대로 반환
      return name;
    }
    return name.substring(0, 1) + '*' + name.substring(2);
  }

  const selectClick = (item) => {
    d.selectedHomeNb = item.homeNb;
    if(d.selectedHomeNb === item.homeNb) {
      d.isActive = true;
    } else if(d.selectedHomeNb !== item.homeNb) {
      d.isActive = false
    }
  }

  const modifiClick = () => { // 수정
    router.push('/modification');
  }

  const nextClick = () => {
    if(d.isActive) {
      router.push('/personalInformation');
    }
  }
</script>

<template>
  <TitleTop :text="d.text" />
  <section>
    <div class="top">
      <button class="bg-w line-active" @click="hnbInquiry">홈넘버로 조회</button>
      <button class="bg-w line-active" @click="hnbIssuance">홈넘버 추가</button>
    </div>
    <div class="contents">
      <div class="notData" v-if="d.list.length === 0">
        <img src="@/assets/images/data-no.png" alt="홈넘버 데이터 없음">
        <p>등록된 홈넘버가</p>
        <p>존재하지 않습니다.</p>
      </div>
      <div class="dataList" v-else>
        <ul>
          <li v-for="item in d.list">
            <div
            :class="item.homeNb === d.selectedHomeNb ? 'active-line':'default-line'"
            @click="selectClick(item)"
            >
              <ul>
                <li>
                  <div>{{ formaNb(item.homeNb) }}</div>
                  <div>{{ item.info }}</div>
                </li>
                <li>
                  <div>{{ formatName(item.name) }}</div>
                  <div>{{ formaNb(item.hp) }}</div>
                </li>
                <li>
                  <div>{{ item.addressNb }}</div>
                  <div>
                    <div>{{ item.address }}</div>
                    <div v-if="item.address1">{{ item.address1 }}</div>
                  </div>
                </li>
              </ul>
              <ul>
                <li>
                  <div :class="item.homeNb === d.selectedHomeNb ? 'red-active':'default'">
                    선택
                    <span>
                      <img src="@/assets/images/checkIconOff.png" v-if="item.homeNb !== d.selectedHomeNb" alt="미선택">
                      <img src="@/assets/images/checkIconOn.png"  v-if="item.homeNb === d.selectedHomeNb" alt="선택">
                    </span>
                  </div>
                </li>
                <li>
                <button @click="modifiClick">수정</button>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <button
      :class="d.isActive ? 'red-active':'default'"
      v-if="d.list.length > 0"
      @click="nextClick"
    >
      다음
    </button>
  </section>
</template>

<style lang="scss" scoped>
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1.5rem;
    border-bottom: 2px solid $c-g300;
    button {
      width: 49%;
    }
  }

  .contents {
    display: flex;
    flex-direction: column;
    .notData {
      width: 12rem;
      margin: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 5rem;
        margin-bottom: 30px;
      }
      p {
        font-weight: bold;
        font-size:24px;
        text-align: center;
      }
    }
  }
  @media (min-width: 769px) {
    section {
      >.contents {
        height: 460px;
      }
    }
  }

  @media (max-width: 768px) {
    section {
      >.contents {
        padding: 0 ;
      }
    }
  }
</style>