<script setup>
  import { reactive, onMounted } from "vue";
  import { useRouter } from 'vue-router';
  import { useHnoMyGetStore } from '@/stores'
  import { hnoMyGet } from "@/api";
  import { formatNb } from '@/utils';

  const router = useRouter();
  const myGetStore = useHnoMyGetStore();

  definePageMeta({
    name: "test_list",
  });

  const d = reactive({
    text: "홈넘버",
    selectedhnoNo: [],
    isActive: false,
    sMyHnoYn: "Y" // (로그인) 마이 홈넘버 조회
  });

  // myGetStore 임시 작업
  // const myGetStore = reactive({
  //   infoProvAuthNo: "11111", // 정보 제공 승인 번호
  //   termsGrpCd: "", // 약관 그룹 코드
  //   hnos: [
  //     {
  //       hnoNo: '10010001004',
  //       virtlHnoNo: '0',
  //       nm: '홍길동',
  //       moblphonNo: '01012345678',
  //       postNo: '06735',
  //       bassAddr: '서울특별시 서초구 강남대로 241',
  //       detailAddr: '9층',
  //       addrNcm: '회사'
  //     },
  //     {
  //       hnoNo: '10010001005',
  //       virtlHnoNo: '1',
  //       nm: '홍길자',
  //       moblphonNo: '01012345678',
  //       postNo: '06735',
  //       bassAddr: '서울특별시 서초구 강남대로 241',
  //       detailAddr: '',
  //       addrNcm: '회사2'
  //     },
  //     {
  //       hnoNo: '10010001006',
  //       virtlHnoNo: '2',
  //       nm: '홍길장',
  //       moblphonNo: '01012345678',
  //       postNo: '06735',
  //       bassAddr: '서울특별시 서초구 강남대로 241',
  //       detailAddr: '',
  //       addrNcm: '회사3'
  //     }
  //   ],
  //   sMyHnoYn: ""
  // });

  const homnumberInquiry = () => { // 홈넘버로 조회
    router.push('/homenumberInquiry');
  };

  const hnbIssuance = () => { // 홈넘버 추가(발급)
    router.push('/issuance');
  };

  const fetchHnoMyGet = async () => {
    const hnoMyGetResult = await hnoMyGet();
    console.log('hnoMyGetResult: ', hnoMyGetResult);

    console.log('myGet.infoProvAuthNo: ', myGetStore.infoProvAuthNo);
    console.log('myGet.termsGrpCd: ', myGetStore.termsGrpCd);
    console.log('myGet.hnos: ', myGetStore.hnos);
  };

  onMounted(() => {
    fetchHnoMyGet();
  });

  const selectClick = (item) => {
    // 선택된 항목의 인덱스를 찾아 추가하거나 제거하고, isActive 상태를 업데이트
    const index = d.selectedhnoNo.indexOf(item.hnoNo);
    if(index > -1) {
      d.selectedhnoNo.splice(index, 1); // 이미 선택된 항목이면 제거
    } else {
      d.selectedhnoNo.push(item.hnoNo); // 선택되지 않은 항목이면 추가
    }

    d.isActive = d.selectedhnoNo.length > 0; // isActive 상태 업데이트

    // 선택된 항목들의 정보를 문자열로 모아 콘솔에 출력
    let selectedItemsInfo = d.selectedhnoNo.length > 0 ? '선택된 항목:\n' : '선택된 항목이 없습니다.';
    d.selectedhnoNo.forEach(hnoNo => {
      const item = myGetStore.hnos.find(listItem => listItem.hnoNo === hnoNo);
      if (item) {
        selectedItemsInfo += `홈넘버: ${item.hnoNo}, 이름: ${item.nm}, 주소: ${item.bassAddr}, 상세주소: ${item.detailAddr}\n`;
      }
    });

    console.log('data: ', selectedItemsInfo);
  };

  const modifiClick = (item) => { // 수정
      router.push({ path: '/modification', query: { hnoNo: item.hnoNo }});
  };

  const nextClick = () => {
    if(d.isActive) {
      router.push('/personalInformation');

      myGetStore.sMyHnoYn = d.sMyHnoYn;
      console.log('d.sMyHnoYn: ', d.sMyHnoYn);

      console.log('myGetStore.sMyHnoYn: ', myGetStore.sMyHnoYn);
      console.log('myGetStore.infoProvAuthNo: ', myGetStore.infoProvAuthNo);
    }
  };
</script>

<template>
  <TitleTop :text="d.text" />
  <section>
    <div class="top">
      <button class="bg-w line-active" @click="homnumberInquiry">홈넘버로 조회</button>
      <button class="bg-w line-active" @click="hnbIssuance">홈넘버 추가</button>
    </div>
    <div class="contents">
      <div class="notData" v-if="myGetStore.hnos.length === 0">
        <img src="@/assets/images/data-no.png" alt="홈넘버 데이터 없음">
        <p>등록된 홈넘버가</p>
        <p>존재하지 않습니다.</p>
      </div>
      <div class="dataList" v-else>
        <ul>
          <li v-for="item in myGetStore.hnos">
            <div
            :class="d.selectedhnoNo.includes(item.hnoNo) ? 'active-line':'default-line'"
            @click="selectClick(item)"
            >
              <ul>
                <li>
                  <div>{{ formatNb(item.hnoNo) }}</div>
                  <div>{{ item.addrNcm }}</div>
                </li>
                <li>
                  <div>{{ item.nm }}</div>
                  <div>{{ formatNb(item.moblphonNo) }}</div>
                </li>
                <li>
                  <div>{{ item.postNo }}</div>
                  <div>
                    <div>{{ item.bassAddr }}</div>
                    <div v-if="item.detailAddr">{{ item.detailAddr }}</div>
                  </div>
                </li>
              </ul>
              <ul>
                <li>
                  <div :class="d.selectedhnoNo.includes(item.hnoNo) ? 'red-active':'default'">
                    선택
                    <span>
                      <img src="@/assets/images/checkIconOff.png" v-if="!d.selectedhnoNo.includes(item.hnoNo)" alt="미선택">
                      <img src="@/assets/images/checkIconOn.png"  v-if="d.selectedhnoNo.includes(item.hnoNo)" alt="선택">
                    </span>
                  </div>
                </li>
                <li>
                <button @click="modifiClick(item)">수정</button>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <button
      :class="d.isActive ? 'red-active':'default'"
      v-if="myGetStore.hnos.length > 0"
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