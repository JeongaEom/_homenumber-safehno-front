<script setup>
  import { reactive, onMounted } from "vue";
  import { useRouter } from 'vue-router';
  import { useHnoMyGetStore } from '@/stores'
  import { hnoMyGet } from "@/api";
  import { formatNb } from '@/utils';

  const router = useRouter();
  const myGetStore = useHnoMyGetStore();

  definePageMeta({
    name: "homenumberList",
    // middleware: 'auth',
  });

  const d = reactive({
    text: "홈넘버",
    selectedHomeNb: "",
    isActive: false,
  });

  const homenumberInquiry = () => {
    router.push('/homenumberInquiry');
  }

  const hnbIssuance = () => {
    router.push('/issuance');
  }

  const selectClick = (item) => {
    d.selectedHomeNb = item;
    if(d.selectedHomeNb === item) {
      d.isActive = true;
    } else if(d.selectedHomeNb !== item) {
      d.isActive = false
    }

    // const index = d.selectedHomeNb.indexOf(item);
    // if (index > -1) {
    //   d.selectedHomeNb.splice(index, 1);
    // } else {
    //   d.selectedHomeNb.push(item);
    // }
    // d.isActive = d.selectedHomeNb.length > 0;

    // console.log('d.selectedHomeNb_선택: ', d.selectedHomeNb);
    // console.log('myGet.infoProvAuthNo_선택: ', myGetStore.infoProvAuthNo);
    // console.log('myGet.termsGrpCd_선택: ', myGetStore.termsGrpCd);
  }

  const modifiClick = () => { // 수정
    router.push('/modification');
  }

  const nextClick = () => {
    if(d.isActive) {
      router.push('/personalInformation');
    }
  }

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
</script>

<template>
  <TitleTop :text="d.text" />
  <section>
    <div class="top">
      <button class="bg-w line-active" @click="homenumberInquiry">홈넘버로 조회</button>
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
              :class="item.virtlHnoNo === d.selectedHomeNb ? 'active-line':'default-line'"
              @click="selectClick(item.virtlHnoNo)"
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
                  <div :class="item.virtlHnoNo === d.selectedHomeNb ?  'red-active':'default'">
                    선택
                    <span>
                      <!-- <img
                        :src="item.virtlHnoNo === d.selectedHomeNb ? '@/assets/images/checkIconOn.png':'@/assets/images/checkIconOff.png'"
                        :alt="item.virtlHnoNo === d.selectedHomeNb ? '선택':'미선택'"
                      > -->
                      <img src="@/assets/images/checkIconOff.png" v-if="item.virtlHnoNo" alt="미선택">
                      <img src="@/assets/images/checkIconOn.png" v-if="item.virtlHnoNo" alt="선택">
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
        height: 438px;
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
  }
</style>